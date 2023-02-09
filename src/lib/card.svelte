<script lang="ts">
	export let header: string;
	export let body: string;
	export let footer: string | null = null;
</script>

<div class="card variant-soft-surface card-hover p-4">
	<header class="card-header">{header}</header>
	<div class="p-4">{body}</div>
	<footer class="card-footer">{footer}</footer>
</div>