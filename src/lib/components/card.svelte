<script lang="ts">
    export let title = 'Foo Bar Program';
    export let description = 'A short description.';
    export let college = 'Amherst College';
    export let due = '2022-01-01';
    export let url = 'https://example.com';
    export let info = '/category/item';
</script>
<a href={info} class="text-sm mx-2 hover:mx-0 hover:cursor-pointer rounded-xl my-2 p-2 hover:shadow-lg hover:bg-bg-primary border border-1 border-transparent hover:border-gray-100 transition-all flex flex-row items-center">
    <div class="w-16 h-16 bg-slate-700 rounded-md"></div>
    <div class="flex flex-col pl-2">
    <div class="text-base">{title}</div>
    <div class="flex flex-row gap-8 justify-between">
        <div class="flex flex-col">
        <div class="text-fg-secondary">{description}</div>
        <div class="text-fg-secondary">{college}</div>
        </div>
        <div class="flex flex-col">
        <div class="text-fg-secondary">Due {due}</div>
        <div><a href={url} class="text-blue-500">Official Website ↗</a></div>
        </div>
    </div>
    </div>
</a>