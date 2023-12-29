<script lang="ts">
	import { fly } from 'svelte/transition';

	export let urlKey: string;
</script>

{#key urlKey}
	<div transition:fly>
		<slot />
	</div>
{/key}
