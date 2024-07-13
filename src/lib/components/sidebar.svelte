<script lang="ts">
    import Sidebaritem from "$lib/components/navlink.svelte";
    import Searchbar from "$lib/components/searchbar.svelte";
</script>

<div class=" flex h-screen flex-shrink-0 flex-col p-2">
    <Sidebaritem text="SCHOLARSHIPS" url="/scholarships"/>
    <Sidebaritem text="FLY IN" url="/flyin"/>
    <Sidebaritem text="ORGANIZATIONS" url="/organizations"/>
    <Sidebaritem text="TESTING" url="/testing"/>
    <Sidebaritem text="COMPETITIONS" url="/competitions"/>
</div>