<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><img src="/logo-no-background.png" width="200px" alt="UserStoryPro logo"/></svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<Avatar src="https://i.pravatar.cc/" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/products">Products</a></li>
				<li><a href="/personas">Personas</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</svelte:fragment>

	<slot class="container mx-auto" />

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
