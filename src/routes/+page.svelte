<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	type Artifact = {
		id: string;
		title: string;
		href: string;
		date: string;
		metaLinks?: { label: string; href: string }[];
	};

	const profileLinks = [
		{ label: 'Email', href: 'mailto:rex.r.ledesma@gmail.com', text: 'rex.r.ledesma@gmail.com' },
		{ label: 'X', href: 'https://x.com/rexledesma', text: '@rexledesma' },
		{ label: 'GitHub', href: 'https://github.com/rexledesma', text: '@rexledesma' },
		{
			label: 'Scholar',
			href: 'https://scholar.google.com/citations?user=V-eNFgkAAAAJ',
			text: '@rexledesma'
		},
		{
			label: 'Strava',
			href: 'https://www.strava.com/athletes/rexledesma',
			text: '@rexledesma'
		},
		{ label: 'Substack', href: 'https://rexledesma.substack.com', text: '@rexledesma' }
	];

	const artifacts: Artifact[] = [
		{
			id: 'laguna-s-2-1',
			title: 'Introducing Laguna S 2.1',
			href: 'https://poolside.ai/blog/introducing-laguna-s-2-1',
			date: '2026-07-21',
			metaLinks: [{ label: 'Hacker News', href: 'https://news.ycombinator.com/item?id=48995261' }]
		},
		{
			id: 'laguna-xs-2-1',
			title: 'Introducing Laguna XS 2.1',
			href: 'https://poolside.ai/blog/introducing-laguna-xs-2-1',
			date: '2026-07-02'
		},
		{
			id: 'laguna-deeper-dive',
			title: 'Laguna XS.2 and M.1: A Deeper Dive',
			href: 'https://poolside.ai/blog/laguna-a-deeper-dive',
			date: '2026-04-28'
		},
		{
			id: 'running-for-park-slope-food-coop',
			title: 'Running for the 2026 Park Slope Food Coop Board of Directors',
			href: 'https://rexledesma.substack.com/p/running-for-the-2026-park-slope-food',
			date: '2026-03-01',
			metaLinks: [
				{
					label: "Linewaiters' Gazette",
					href: 'https://linewaitersgazette.com/2026/03/03/board-candidates-who-they-are-and-why-theyre-running/'
				},
				{
					label: 'Election Results',
					href: 'https://linewaitersgazette.com/2026/07/28/taylor-pate-wins-board-seat-defeating-coop-co-founder-joe-holtz/'
				}
			]
		},
		{
			id: 'foodcoop-news',
			title: 'Foodcoop News',
			href: 'https://foodcoop.news',
			date: '2026-01-14',
			metaLinks: [{ label: 'GitHub', href: 'https://github.com/rexledesma/foodcoop.news' }]
		},
		{
			id: 'beginning-again',
			title: 'Beginning Again',
			href: 'https://rexledesma.substack.com/p/beginning-again',
			date: '2025-06-19'
		},
		{
			id: 'dagster',
			title: 'Dagster',
			href: 'https://dagster.io',
			date: '2024-10-01',
			metaLinks: [{ label: 'GitHub', href: 'https://github.com/dagster-io/dagster' }]
		},
		{
			id: 'dagster-catalog',
			title: 'Dagster+ Catalog: A New Built-in Asset Library',
			href: 'https://dagster.io/blog/dagster-plus-calatog-a-new-built-in-asset-library',
			date: '2024-04-17',
			metaLinks: [{ label: 'Livestream', href: 'https://www.youtube.com/watch?v=_ZCYHUOd56o' }]
		},
		{
			id: 'orchestrating-dbt',
			title: 'Orchestrating dbt with Dagster',
			href: 'https://dagster.io/blog/orchestrating-dbt-with-dagster',
			date: '2023-08-01',
			metaLinks: [{ label: 'Livestream', href: 'https://www.youtube.com/watch?v=yv97Xgbwwmo' }]
		},
		{
			id: 'daca-anniversary',
			title: 'Celebrating the 11th Anniversary of DACA with Kamala Harris',
			href: 'https://x.com/VP46Archive/status/1669343317145051137',
			date: '2023-06-15',
			metaLinks: [
				{
					label: 'ABC News',
					href: 'https://abcnews.go.com/Politics/daca-turns-11-white-house-calls-immigration-reform/story?id=100084798'
				},
			]
		},
		{
			id: 'alumni-profile',
			title: 'Alumni Profile: Rex Ledesma',
			href: 'https://www.jkcf.org/our-stories/december-2022-newsletter/',
			date: '2022-12-16'
		},
		{
			id: 'forgotten-dreams',
			title: 'Forgotten Dreams Beyond DACA',
			href: 'https://rexledesma.substack.com/p/forgotten-dreams',
			date: '2022-12-15'
		},
		{
			id: 'reinterpretations-irca',
			title: 'Reinterpretations of IRCA',
			href: 'https://rexledesma.substack.com/p/reinterpretations-of-irca',
			date: '2022-12-03',
			metaLinks: [
				{
					label: 'r/DACA',
					href: 'https://www.reddit.com/r/DACA/comments/zblm00/new_legal_scholarship_says_state_entities_like/'
				},
				{
					label: 'r/ucla',
					href: 'https://www.reddit.com/r/ucla/comments/zcig5j/new_legal_scholarship_from_ucla_says_state/'
				},
				{
					label: 'r/berkeley',
					href: 'https://www.reddit.com/r/berkeley/comments/zctp5u/new_legal_scholarship_from_ucla_says_state/'
				}
			]
		},
		{
			id: 'journey-before-law',
			title: 'The Journey Before the Law',
			href: 'https://rexledesma.substack.com/p/the-journey-before-the-law',
			date: '2022-10-02'
		},
		{
			id: 'pricing-philosophy',
			title: 'Our Pricing Philosophy for Dagster Cloud',
			href: 'https://web.archive.org/web/20221005014539/https://dagster.io/blog/dagster-cloud-pricing-philosophy',
			date: '2022-08-09',
			metaLinks: [{ label: 'Livestream', href: 'https://www.youtube.com/watch?v=70c84LDZuzQ' }]
		}
	];

	const sortedArtifacts = artifacts
		.slice()
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	function getYear(date: string) {
		return new Date(date).getUTCFullYear();
	}

	function shouldShowYear(index: number) {
		if (index === 0) {
			return true;
		}

		return getYear(sortedArtifacts[index - 1].date) !== getYear(sortedArtifacts[index].date);
	}

	function shouldInsetDivider(index: number) {
		if (index === sortedArtifacts.length - 1) {
			return false;
		}

		return getYear(sortedArtifacts[index].date) === getYear(sortedArtifacts[index + 1].date);
	}

	function resolveHref(href: string) {
		if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(href)) {
			return href;
		}

		return new URL(href, 'https://rexledesma.com').toString();
	}

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: '2-digit',
			timeZone: 'UTC'
		}).format(new Date(date));
	}
</script>

<SEO
	title="Rex Ledesma"
	description="Rex is an engineer, writer, and technologist."
	type="website" />

<div class="mx-auto max-w-2xl px-6 py-12" data-fade-scope>
	<div class="space-y-6" data-fade-block>
		<h1 class="text-xl font-semibold">Rex Ledesma</h1>
		<div class="flex items-center gap-4 sm:gap-6">
			<img
				src="/assets/images/rexledesma.jpg"
				alt="Rex Ledesma"
				class="w-24 shrink-0 sm:w-48" />
			<div class="min-w-0 flex-1 pt-1">
				<ul class="space-y-1">
					{#each profileLinks as link (link.href)}
						<li class="flex items-baseline gap-3 leading-snug">
							<div class="w-18 shrink-0 text-black/55">{link.label}</div>
							<div class="min-w-0 flex-1">
								<a href={link.href} rel="external">{link.text}</a>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="space-y-4 leading-relaxed">
			<p data-fade-block>Hi, I'm Rex. I'm a technologist, engineer, and writer.</p>
			<p data-fade-block>
				I'm currently an engineer at <a href="https://poolside.ai">Poolside</a>, focusing on
				research infrastructure and building out our <a
					href="https://poolside.ai/blog/introducing-the-model-factory">model factory</a
				>. Before, I was a programming
				resident at the <a
					href="https://www.recurse.com/scout/click?t=316374a3f07c2a30d4a9dfad7fa59452"
					>Recurse Center</a
				> and an engineer at <a href="https://www.dagster.io">Dagster Labs</a>.
			</p>
			<p data-fade-block>
				I write <a href="https://rexledesma.substack.com">Referents</a>, a personal newsletter in
				the space of technology and immigration law. My work advocating for high-skilled immigration
				reform has been recognized by <a href="https://fwd.us">FWD.us</a> and the
				<a href="https://x.com/VP46Archive/status/1669343317145051137"
					>former presidential administration</a
				>.
			</p>
			<p data-fade-block>
				Previously, I worked at <a href="https://airbnb.com">Airbnb</a>,
				<a href="https://asana.com/">Asana</a>, and <a href="https://facebook.com">Facebook</a>.
				Prior to that, I graduated from the University of Maryland
				<em>summa cum laude</em>
				as a
				<a href="https://www.jkcf.org/our-scholarships/college-scholarship-program/"
					>Jack Kent Cooke Scholar</a
				>. I was a teaching assistant for classes in machine learning and algorithms, and directed Bitcamp (<a href="https://2017.bit.camp/">2017</a>,
				<a href="https://2018.bit.camp/">2018</a>).
			</p>
			<p data-fade-block>
				My other interests include reading, running, and cycling. I run for <a
					href="https://centralparktc.org/">Central Park Track Club</a>
				and am a member of the <a href="https://www.foodcoop.com/">Park Slope Food Coop</a>.
			</p>
		</div>
	</div>

	<div class="mt-12 space-y-2" data-fade-block>
		<h2 class="text-lg font-semibold">Artifacts</h2>
		<ul class="border-y border-black/15">
			{#each sortedArtifacts as artifact, index (index)}
				<li class="relative px-0 py-3">
					<div class="flex items-baseline gap-4">
						<div class="w-12 shrink-0 font-mono text-black/55 tabular-nums">
							{#if shouldShowYear(index)}{getYear(artifact.date)}{/if}
						</div>
						<div class="flex min-w-0 flex-1 items-center gap-4">
							<div class="min-w-0 flex-1">
								<a
									href={resolveHref(artifact.href)}
									rel="external"
									class="text-left underline">
									{artifact.title}
								</a>
								{#if artifact.metaLinks?.length}
									<small class="block text-black/60">
										{#each artifact.metaLinks as link, linkIndex (link.href)}
											{#if linkIndex > 0} · {/if}
											<a href={resolveHref(link.href)} rel="external">{link.label}</a>
										{/each}
									</small>
								{/if}
							</div>
							<time
								datetime={artifact.date}
								class="shrink-0 font-mono text-sm text-black/60 tabular-nums">
								{formatDate(artifact.date)}
							</time>
						</div>
					</div>
					{#if index < sortedArtifacts.length - 1}
						<div
							class={`absolute right-0 bottom-0 h-px bg-black/10 ${
								shouldInsetDivider(index) ? 'left-16' : 'left-0'
							}`}></div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>
