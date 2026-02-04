<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { formatDate } from '$lib/utils/posts';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const Content = $derived(data.content);
	const metadata = $derived(data.metadata);
</script>

<SEO
	title={metadata.title}
	description={metadata.description}
	image={metadata.image}
	type="article"
	publishedTime={metadata.date} />

<article class="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
	<header class="mb-12">
		<h1 class="mb-4 text-4xl font-normal leading-tight sm:text-5xl">{metadata.title}</h1>
		<p class="text-lg text-gray-600">{formatDate(metadata.date)}</p>
	</header>

	<div class="prose prose-lg max-w-none">
		<Content />
	</div>

	<footer class="mt-16">
		<p class="text-sm italic">
			<a href={resolve('/blog')}>Return home</a>
		</p>
	</footer>
</article>
