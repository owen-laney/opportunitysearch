<script lang="ts">
    export let title = 'Foo Bar Program';
    export let description = 'A short description.';
    export let college = 'Amherst College';
    export let due = '2022-01-01';
    export let url = 'https://example.com';
</script>
<div class="text-sm  rounded-xl my-2 p-2 hover:bg-hover flex flex-row items-center">
    <div class="w-16 h-16 bg-slate-700 rounded-md"></div>
    <div class="flex flex-col pl-2">
    <div class="text-base">{title}</div>
    <div class="flex flex-row gap-2 justify-between w-80">
        <div class="flex flex-col">
        <div class="text-fg-secondary">{description}</div>
        <div class="text-fg-secondary">{college}</div>
        </div>
        <div class="flex flex-col">
        <div class="text-fg-secondary">{due}</div>
        <div><a href={url} class="text-blue-500">Official Website ↗</a></div>
        </div>
    </div>
    </div>
</div>