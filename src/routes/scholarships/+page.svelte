<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import Searchbar from "$lib/components/searchbar.svelte";
    import Chips from "$lib/components/chips.svelte";
</script>
<div class="flex justify-center">
    <div class="">
        <div class="px-2 pt-4 pb-2">
        <Searchbar />
        </div>
        <Chips />
        <div class="rounded-t-xl">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
</div>