<script lang="ts">
    import Sidebaritem from "$lib/components/navlink.svelte";
    import Searchbar from "$lib/components/searchbar.svelte";
</script>

<div class="bg-bg-secondary flex w-64 h-screen flex-shrink-0 flex-col border-r border-border-primary">
    <div class="p-2">
        <Searchbar/>
    </div>
    <Sidebaritem text="Scholarships" url="/scholarships"/>
    <Sidebaritem text="Fly-In Programs" url="/flyin"/>
    <Sidebaritem text="Organizations" url="/organizations"/>
    <Sidebaritem text="Testing" url="/testing"/>
    <Sidebaritem text="Dual Enrollment" url="/dualenrollment"/>
</div>