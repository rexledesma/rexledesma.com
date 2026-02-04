import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Create a cached highlighter promise
let highlighterPromise;
const getHighlighter = async () => {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ['solarized-light'],
			langs: [
				'javascript',
				'typescript',
				'python',
				'bash',
				'json',
				'html',
				'css',
				'svelte',
				'markdown'
			]
		});
	}
	return highlighterPromise;
};

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeKatex],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await getHighlighter();
			const html = highlighter.codeToHtml(code, {
				lang: lang || 'text',
				theme: 'solarized-light'
			});
			return `{@html \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
