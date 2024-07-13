<script>
        import Searchbar from "$lib/components/searchbar.svelte";
        import NavLink from "./navlink.svelte";
</script>

<div class="sticky top-0" >
    <div class=" h-full w-full backdrop-blur-md overflow-hidden bg-gray-100/40 dark:bg-gray-800/10 shadow-lg shadow-gray-900/10">
        <div class="absolute h-full w-full top-0 left-0 right-0 bottom-0 overflow-hidden bg-gray-300/10 dark:bg-gray-700/10 backdrop-blur-xl" style="mask-image: repeating-linear-gradient(90deg, black 0px, black 1px, transparent 3px, transparent 6px);"></div>
        <div class="absolute h-full w-full top-0 left-0 right-0 bottom-0 overflow-hidden bg-gray-300/10 dark:bg-gray-700/10 backdrop-blur-xl" style="mask-image: repeating-linear-gradient(90deg, black 0px, black 1px, transparent 3px, transparent 6px);"></div>
        <div class="grid grid-cols-3 p-3 sticky top-0 border-b border-gray-300 dark:border-gray-800" >
            <div class="justify-self-start">
                <NavLink text="Home" url="/"/><NavLink text="Search" url="/search"/><NavLink text="Projects" url="/projects"/><NavLink text="Explore" url="/explore"/>
            </div>
            <div class="justify-self-center">
                <Searchbar />
            </div>
            <div class="justify-self-end justify-items-center">
                <NavLink text="Settings" url="/settings"/><NavLink text="Profiles" url="/user/youruser"/>
            </div>
        </div>
    </div>
</div>