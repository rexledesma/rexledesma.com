import type { Post, PostMetadata, PostsByYear } from '$lib/types/post';

type GlobResult = Record<string, () => Promise<{ metadata: PostMetadata }>>;

export async function getPosts(): Promise<Post[]> {
	const postModules = import.meta.glob<{ metadata: PostMetadata }>('/src/lib/posts/*.md');

	const posts: Post[] = [];

	for (const [path, resolver] of Object.entries(postModules as GlobResult)) {
		const { metadata } = await resolver();
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';

		posts.push({
			metadata,
			slug
		});
	}

	// Sort by date descending
	posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

	return posts;
}

export function groupPostsByYear(posts: Post[]): PostsByYear[] {
	const groups: Map<number, Post[]> = new Map();

	for (const post of posts) {
		const year = new Date(post.metadata.date).getFullYear();
		if (!groups.has(year)) {
			groups.set(year, []);
		}
		groups.get(year)!.push(post);
	}

	// Convert to array and sort by year descending
	return Array.from(groups.entries())
		.map(([year, posts]) => ({ year, posts }))
		.sort((a, b) => b.year - a.year);
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function formatDateShort(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric'
	});
}
