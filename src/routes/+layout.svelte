<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	const animatedSelector =
		'h1, h2, h3, h4, h5, h6, p, ul, ol, li, a, blockquote, figcaption, small, strong, em, label, img';

	function assignFadeOrder() {
		const elements = Array.from(
			document.querySelectorAll<HTMLElement>(`${animatedSelector}, [data-fade-block]`)
		).filter((element) => {
			if (element.hasAttribute('data-fade-block')) {
				return true;
			}

			return !element.closest('[data-fade-scope]');
		});
		const sortedElements = elements.sort((a, b) => {
			const aRect = a.getBoundingClientRect();
			const bRect = b.getBoundingClientRect();
			const aTop = aRect.top + window.scrollY;
			const bTop = bRect.top + window.scrollY;

			if (aTop !== bTop) {
				return aTop - bTop;
			}

			return aRect.left - bRect.left;
		});

		sortedElements.forEach((element, index) => {
			element.style.setProperty('--fade-order', String(index));
		});
	}

	onMount(() => {
		assignFadeOrder();
		afterNavigate(() => {
			requestAnimationFrame(assignFadeOrder);
		});
	});
</script>

{@render children()}
