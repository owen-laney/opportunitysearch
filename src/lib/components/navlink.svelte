<script>
	export let url = 'https://example.com';
	export let text = 'Link Name';
	export let style = 'regular';
	import { page, navigating } from '$app/stores';
</script>

{#if style === 'regular'}
	<a
		href={url}
		aria-current={$page.url.pathname === url}
		class="text-fg-tertiary rounded-md inline-block whitespace-nowrap align-middle overflow-hidden overflow-ellipsis flex-none text-md p-2 hover:bg-bg-primary-hover"
	>
		{text}
	</a>
{:else if style === 'sidebar'}
	<a
		href={url}
		aria-current={$page.url.pathname === url}
		class="text-fg-tertiary rounded-md inline-block whitespace-nowrap align-middle overflow-hidden overflow-ellipsis flex-none text-sm px-2 py-1 hover:bg-bg-primary-hover"
	>
		{text}
	</a>
{:else}
	<div>error: link style not recognized. please screenshot and report this issue</div>
{/if}