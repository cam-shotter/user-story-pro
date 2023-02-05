<script>
	import Card from "$lib/card.svelte";

	const props = {
		header: "heading",
		body: "body",
		footer: "foot"
	}
</script>



<div class="container mx-auto p-8 space-y-8">
	<h1>UserStoryPro</h1>
	<p>Automate your story workflow</p>
	<hr />

	<Card {...props}/>
	<hr />
	<section class="flex space-x-2">
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
	</section>
</div>