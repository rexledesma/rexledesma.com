<script lang="ts">
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { formatDateShort } from '$lib/utils/posts';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<SEO
	title="Notes from the Overground"
	description="Some thoughts on the journey so far, and yet to come."
	type="website" />

<article class="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
	<header class="mb-12">
		<h1 class="mb-4 text-4xl font-normal leading-tight sm:text-5xl">Notes from the Overground</h1>
		<p class="text-lg italic text-gray-600">
			<a href={resolve('/')}>Rex Ledesma</a>
		</p>
	</header>

	<section class="prose prose-lg max-w-none">
		<h2>Posts by Year</h2>

		{#each data.postsByYear as { year, posts } (year)}
			<h3>{year}</h3>
			<ul>
				{#each posts as post (post.slug)}
					<li>
						{formatDateShort(post.metadata.date)}:
						<a href={resolve(`/blog/${post.slug}`)}>{post.metadata.title}</a>
					</li>
				{/each}
			</ul>
		{/each}
	</section>
</article>
