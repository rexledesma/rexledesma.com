<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	type Artifact = {
		id: string;
		title: string;
		href: string;
		year: number;
		sortDate: string;
		meta: string;
		metaLinks?: { label: string; href: string }[];
	};

	const profileLinks = [
		{ label: 'Substack', href: 'https://rexledesma.substack.com', text: '@rexledesma' },
		{ label: 'X', href: 'https://x.com/rexrledesma', text: '@rexrledesma' },
		{ label: 'GitHub', href: 'https://github.com/rexledesma', text: '@rexledesma' },
		{
			label: 'Strava',
			href: 'https://www.strava.com/athletes/rexledesma',
			text: '@rexledesma'
		},
		{ label: 'Email', href: 'mailto:rex.ledesma1@gmail.com', text: 'rex.ledesma1@gmail.com' }
	];

	const artifacts: Artifact[] = [
		{
			id: 'dagster',
			title: 'Dagster',
			href: 'https://dagster.io',
			year: 2024,
			sortDate: '2024-10-01',
			meta: 'Project, Dagster Labs, October 2024',
			metaLinks: [{ label: 'GitHub', href: 'https://github.com/dagster-io/dagster' }]
		},
		{
			id: 'foodcoop-news',
			title: 'Foodcoop News',
			href: 'https://foodcoop.news',
			year: 2026,
			sortDate: '2026-01-01',
			meta: 'Project, Park Slope Food Coop, January 2026',
			metaLinks: [{ label: 'GitHub', href: 'https://github.com/rexledesma/foodcoop.news' }]
		},
		{
			id: 'running-for-park-slope-food-coop',
			title: 'Running for the 2026 Park Slope Food Coop Board of Directors',
			href: 'https://rexledesma.substack.com/p/running-for-the-2026-park-slope-food',
			year: 2026,
			sortDate: '2026-02-01',
			meta: 'Media, Referents, February 2026',
			metaLinks: [
				{
					label: "Linewaiters' Gazette",
					href: 'https://linewaitersgazette.com/2026/03/03/board-candidates-who-they-are-and-why-theyre-running/'
				}
			]
		},
		{
			id: 'beginning-again',
			title: 'Beginning Again',
			href: 'https://rexledesma.substack.com/p/beginning-again',
			year: 2025,
			sortDate: '2025-06-01',
			meta: 'Media, Referents, June 2025'
		},
		{
			id: 'forgotten-dreams',
			title: 'Forgotten Dreams Beyond DACA',
			href: 'https://rexledesma.substack.com/p/forgotten-dreams',
			year: 2022,
			sortDate: '2022-12-01',
			meta: 'Writing, Referents, December 2022'
		},
		{
			id: 'reinterpretations-irca',
			title: 'Reinterpretations of IRCA',
			href: 'https://rexledesma.substack.com/p/reinterpretations-of-irca',
			year: 2022,
			sortDate: '2022-12-01',
			meta: 'Writing, Referents, December 2022',
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
			year: 2022,
			sortDate: '2022-10-01',
			meta: 'Writing, Referents, October 2022'
		},
		{
			id: 'dagster-catalog',
			title: 'Dagster+ Catalog: A New Built-in Asset Library',
			href: 'https://dagster.io/blog/dagster-plus-calatog-a-new-built-in-asset-library',
			year: 2024,
			sortDate: '2024-04-01',
			meta: 'Media, Dagster Labs, April 2024',
			metaLinks: [{ label: 'Livestream', href: 'https://www.youtube.com/watch?v=_ZCYHUOd56o' }]
		},
		{
			id: 'orchestrating-dbt',
			title: 'Orchestrating dbt with Dagster',
			href: 'https://dagster.io/blog/orchestrating-dbt-with-dagster',
			year: 2023,
			sortDate: '2023-08-01',
			meta: 'Media, Dagster Labs, August 2023',
			metaLinks: [{ label: 'Livestream', href: 'https://www.youtube.com/watch?v=yv97Xgbwwmo' }]
		},
		{
			id: 'daca-anniversary',
			title: 'Celebrating the 11th Anniversary of DACA with Kamala Harris',
			href: 'https://x.com/VP46Archive/status/1669343317145051137',
			year: 2023,
			sortDate: '2023-06-01',
			meta: 'Media, Office of the VP, June 2023',
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
			year: 2022,
			sortDate: '2022-12-01',
			meta: 'Media, Jack Kent Cooke Foundation, December 2022'
		},
		{
			id: 'pricing-philosophy',
			title: 'Our Pricing Philosophy for Dagster Cloud',
			href: 'https://web.archive.org/web/20221005014539/https://dagster.io/blog/dagster-cloud-pricing-philosophy',
			year: 2022,
			sortDate: '2022-08-01',
			meta: 'Media, Dagster Labs, August 2022',
			metaLinks: [{ label: 'Livestream', href: 'https://www.youtube.com/watch?v=70c84LDZuzQ' }]
		}
	];

	const sortedArtifacts = artifacts
		.slice()
		.sort((a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime());

	function shouldShowYear(index: number) {
		if (index === 0) {
			return true;
		}

		return sortedArtifacts[index - 1].year !== sortedArtifacts[index].year;
	}

	function shouldInsetDivider(index: number) {
		if (index === sortedArtifacts.length - 1) {
			return false;
		}

		return sortedArtifacts[index].year === sortedArtifacts[index + 1].year;
	}

	function resolveHref(href: string) {
		if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(href)) {
			return href;
		}

		return new URL(href, 'https://rexledesma.com').toString();
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
					{#each profileLinks as link}
						<li class="flex items-baseline gap-3 leading-snug">
							<div class="w-18 shrink-0 text-black/55">{link.label}</div>
							<div class="min-w-0 flex-1">
								<a href={link.href}>{link.text}</a>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="space-y-4 leading-relaxed">
			<p data-fade-block>Hi, I'm Rex. I'm a technologist, engineer, and writer.</p>
			<p data-fade-block>
				I'm currently a programming resident at the <a
					href="https://www.recurse.com/scout/click?t=316374a3f07c2a30d4a9dfad7fa59452"
					>Recurse Center</a
				>. Before, I was an engineer at <a href="https://www.dagster.io">Dagster Labs</a>.
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
				I'm also running for the 2026 board of directors election at the Park Slope Food Coop. Here
				is my <a href="https://rexledesma.substack.com/p/running-for-the-2026-park-slope-food"
					>candidate statement</a
				>.
			</p>
			<p data-fade-block>
				Previously, I worked at <a href="https://airbnb.com">Airbnb</a>,
				<a href="https://asana.com/">Asana</a>, and <a href="https://facebook.com">Facebook</a>.
				Prior to that, I graduated from the University of Maryland
				<em>summa cum laude</em>
				with honors as a
				<a href="https://www.jkcf.org/our-scholarships/college-scholarship-program/"
					>Jack Kent Cooke Scholar</a
				>. I was a teaching assistant for classes in machine learning and algorithms and was
				director of Bitcamp (<a href="https://2017.bit.camp/">2017</a>,
				<a href="https://2018.bit.camp/">2018</a>).
			</p>
			<p data-fade-block>
				My other interests include reading, running, and cycling. I run for <a
					href="https://centralparktc.org/">Central Park Track Club</a>
				and I'm a member of the <a href="https://www.foodcoop.com/">Park Slope Food Coop</a>.
			</p>
		</div>
	</div>

	<div class="mt-12 space-y-2" data-fade-block>
		<h2 class="text-lg font-semibold">Artifacts</h2>
		<ul class="border-y border-black/15">
			{#each sortedArtifacts as artifact, index (index)}
				<li class="relative px-0 py-2">
					<div class="flex items-baseline gap-4">
						<div class="w-12 shrink-0 text-black/55 tabular-nums">
							{#if shouldShowYear(index)}{artifact.year}{/if}
						</div>
						<div class="min-w-0 flex-1">
							<a href={resolveHref(artifact.href)} class="text-left underline">
								{artifact.title}
							</a>
							<small class="block text-black/60">
								{artifact.meta}
								{#if artifact.metaLinks?.length}
									{#each artifact.metaLinks as link}
										{' · '}
										<a href={resolveHref(link.href)}>{link.label}</a>
									{/each}
								{/if}
							</small>
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
