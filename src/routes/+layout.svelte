<script>
    import "../app.css";
    import Sidebar from "$lib/components/sidebar.svelte";
</script>

<div class="flex flex-row overflow-hidden h-screen">
    <Sidebar />
    <div class="overflow-auto w-full">
        <slot />
    </div>
</div>