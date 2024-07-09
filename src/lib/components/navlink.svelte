<script>
	export let url = 'https://example.com';
	export let text = 'Link Name';
	export let style = 'regular';
	import { page, navigating } from '$app/stores';
</script>

<a href={url} aria-current={$page.url.pathname === url} class="text-sm px-3 py-2 hover:bg-hover h-min" >
    {text}
</a>