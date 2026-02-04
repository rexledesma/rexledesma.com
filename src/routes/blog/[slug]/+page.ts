import type { PageLoad } from './$types';
import type { PostModule } from '$lib/types/post';

export const load: PageLoad = async ({ params }) => {
	const post = (await import(`../../../lib/posts/${params.slug}.md`)) as PostModule;

	return {
		content: post.default,
		metadata: post.metadata
	};
};
