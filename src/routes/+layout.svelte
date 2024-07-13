<script>
    import "../app.css";
    import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="bg-transparent dark:bg-black flex flex-col overflow-y-hidden h-screen">
    <div class="w-screen absolute items-center z-10 pointer-events-none">
        <div class="w-screen items-center z-10 pointer-events-none">
        <Navbar />
        </div>
        </div>
        <div class="flex flex-grow overflow-auto justify-center p-16">
        <slot />
    </div>
</div>

