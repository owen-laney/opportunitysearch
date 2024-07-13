<script>
	export let url = 'https://example.com';
	export let text = 'Link Name';
	export let style = 'regular';
	import { page, navigating } from '$app/stores';
</script>

<a href={url} aria-current={$page.url.pathname === url} class="text-sm px-3 py-2 transition-all rounded-full hover:shadow-sm hover:bg-white h-min" >
    {text}
</a>