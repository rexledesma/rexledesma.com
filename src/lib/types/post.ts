import type { SvelteComponent } from 'svelte';

export interface PostMetadata {
	title: string;
	date: string;
	description?: string;
	image?: string;
	categories?: string;
	math?: boolean;
}

export interface Post {
	metadata: PostMetadata;
	slug: string;
}

export interface PostModule {
	default: typeof SvelteComponent;
	metadata: PostMetadata;
}

export interface PostsByYear {
	year: number;
	posts: Post[];
}
