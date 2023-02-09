<script lang="ts">
    import type { PageData } from './$types';
	import Card from './card.svelte';
    
    export let data: PageData;

    interface Project {
        id: string,
        name: string,
        description: string,
    }

    const projects: Project[] = [
        {
            id: "1",
            name: "Flux",
            description: "A welding application",
        },
        {
            id: "2",
            name: "Maple",
            description: "A tree management application",
        },
        {
            id: "3",
            name: "Iron",
            description: "A forging application",
        },
        {
            id: "4",
            name: "Candy",
            description: "A sweet application",
        },
        {
            id: "5",
            name: "Flux",
            description: "A welding application",
        },
        {
            id: "6",
            name: "Maple",
            description: "A tree management application",
        },
        {
            id: "7",
            name: "Iron",
            description: "A forging application",
        },
        {
            id: "8",
            name: "Candy",
            description: "A sweet application",
        },
    ]
</script>

<header class="flex place-content-center">
    <h1>Projects</h1>
</header>

<main class="p-4"> 
    <div class="place-content-center grid grid-cols-ram gap-8">
        {#each projects as p}
            <a href="/products/product"><Card {...p} /></a>
        {/each}
    </div>
</main>