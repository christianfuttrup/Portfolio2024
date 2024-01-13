<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class="container mx-auto border">
	<slot />
</main>
