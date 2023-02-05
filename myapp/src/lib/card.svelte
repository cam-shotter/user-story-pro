<script lang="ts">
	export let header: string;
	export let body: string;
	export let footer: string;
</script>

<div class="card">
	<header class="card-header">{header}</header>
	<div class="p-4">{body}</div>
	<footer class="card-footer">{footer}</footer>
</div>