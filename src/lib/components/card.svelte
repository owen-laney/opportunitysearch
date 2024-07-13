<script lang="ts">
    export let title = 'Program Name';
    export let description = 'A short description. A short description. A short description. A short description. A short description.';
    export let college = 'College Name';
    export let due = '2022-01-01';
    export let url = 'https://example.com';
    export let info = '/category/item';
</script>

<a href={info} class="group text-sm hover:cursor-pointer p-2 hover:bg-gray-50 border border-1 border-transparent flex flex-row items-center">
    <div class="flex flex-col gap-1">
        <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-2 items-end">

                <div class="flex flex-col">
                    <div class="text-lg">{title}</div>
                    <div class="text-gray-700">{college} • {due}</div>
                </div>
            </div>
        </div>

            <div class="">{description}</div>
            <div class="flex flex-row">
            </div>
            
            <div class="flex flex-row gap-4">
                <button class="text-lg text-gray-700 hover:text-black active:scale-95"><i class="ph ph-heart"></i></button>
                <button class="text-lg text-gray-700 hover:text-black active:scale-95"><i class="ph ph-share-fat"></i></button>
                <a href={url} class="text-lg text-gray-700 hover:text-black active:scale-95"><i class="ph ph-globe"></i></a>
                <button class="text-lg text-gray-700 hover:text-black active:scale-95"><i class="ph ph-dots-three-vertical"></i></button>

            </div>

    </div>
</a>