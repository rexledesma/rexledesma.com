<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from './SEO.svelte';
	import { formatDate } from '$lib/utils/posts';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		date: string;
		description?: string;
		image?: string;
		children: Snippet;
	}

	const { title, date, description, image, children }: Props = $props();
</script>

<SEO
	{title}
	{description}
	{image}
	type="article"
	publishedTime={date}
	url={`https://rexledesma.com/blog/${title.toLowerCase().replace(/\s+/g, '-')}`} />

<article class="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
	<header class="mb-12">
		<h1 class="mb-4 text-4xl font-normal leading-tight sm:text-5xl">{title}</h1>
		<p class="text-lg text-gray-600">{formatDate(date)}</p>
	</header>

	<div class="prose prose-lg max-w-none">
		{@render children()}
	</div>

	<footer class="mt-16">
		<p class="text-sm italic">
			<a href={resolve('/blog')}>Return home</a>
		</p>
	</footer>
</article>
