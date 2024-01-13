<script lang="ts">
	import { fade } from 'svelte/transition';

	export let urlKey: string;
</script>

{#key urlKey}
	<div transition:fade>
		<slot />
	</div>
{/key}
