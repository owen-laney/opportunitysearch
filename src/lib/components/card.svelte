<script lang="ts">
    export let title = 'Foo Bar Program';
    export let description = 'This is a decription of what the program is, how it works, and more. It can be a few lines or only one.';
    export let location = 'Atlanta, GA, USA';
    export let url = 'https://example.com';
</script>
<div class="text-sm bg-bg-secondary rounded-md m-2 p-2">
    <div class="text-base">{title}</div>
    <div>{description}</div>
    <div>{location}</div>
    <div><a href={url} class="text-blue-500">Official Website ↗</a></div>
</div>