<script>
    import "../app.css";
    import Sidebar from "$lib/components/sidebar.svelte";
</script>
<div class="flex flex-row overflow-hidden h-screen bg-white justify-center">
    <Sidebar />
    <div class="overflow-auto">
        <slot />
    </div>
    <Sidebar />

</div>