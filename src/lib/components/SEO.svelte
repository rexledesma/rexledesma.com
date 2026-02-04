<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		image?: string;
		url?: string;
		type?: 'website' | 'article';
		author?: string;
		publishedTime?: string;
	}

	const {
		title = 'Rex Ledesma',
		description = 'Rex is an engineer, writer, and technologist.',
		image = '/assets/images/icons/logo.png',
		url = 'https://rexledesma.com',
		type = 'website',
		author = 'Rex Ledesma',
		publishedTime
	}: Props = $props();

	const fullTitle = $derived(title === 'Rex Ledesma' ? title : `${title} | Rex Ledesma`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@rexrledesma" />
	<meta name="twitter:creator" content="@rexrledesma" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
		<meta property="article:author" content={author} />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={url} />
</svelte:head>
