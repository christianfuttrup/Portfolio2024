<script lang="ts">
	import '../app.css';

	import type { PageData } from './$types';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import MenuItem from '$lib/components/MenuItem.svelte';

	export let data: PageData;

	let activeItem = 'All';
</script>

<header class="my-12">
	<nav class="relative mx-auto w-72 rounded-full border bg-slate-50 px-5 py-2">
		<ul class="flex justify-between">
			<MenuItem title="All" />
			<MenuItem title="About" />
			<MenuItem title="Projects" />
			<MenuItem title="Blog" />
		</ul>
	</nav>
</header>

<PageTransition urlKey={data.url}>
	<main class="mx-auto py-5">
		<slot />
	</main>
</PageTransition>
