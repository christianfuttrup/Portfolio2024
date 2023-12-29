<script lang="ts">
	import '../app.css';

	import type { PageData } from './$types';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	export let data: PageData;
</script>

<Navigation />

<PageTransition urlKey={data.url}>
	<main class="mx-auto py-5">
		<slot />
	</main>
</PageTransition>
