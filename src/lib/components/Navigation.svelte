<script lang="ts">
	import { activeItem } from '$lib/stores/stores';
	import { onMount } from 'svelte';

	let activeItemChip: HTMLDivElement;

	let allLink: HTMLButtonElement;
	let aboutLink: HTMLButtonElement;
	let projectsLink: HTMLButtonElement;
	let mediaLink: HTMLButtonElement;

	onMount(() => {
		updateActiveItemChip(allLink);
	});

	function updateActiveItemChip(menuItem: HTMLButtonElement) {
		console.log(menuItem.clientWidth);
		activeItemChip.style.width = `${menuItem.clientWidth}px`;
		activeItemChip.style.left = `${menuItem.offsetLeft + 13}px`;

		activeItem.set(menuItem.innerText.toLowerCase());
	}
</script>

<header class="mt-12 flex justify-center">
	<nav class="p relative inline-block rounded-full border bg-stone-300 px-3 py-2 shadow-inner">
		<!-- Chip -->
		<div
			bind:this={activeItemChip}
			class="absolute bottom-2 top-2 z-0 rounded-full bg-white transition-all duration-300"
		></div>

		<!-- Menu items -->
		<div class="relative z-10 flex justify-around gap-2">
			<button
				on:click={() => updateActiveItemChip(allLink)}
				on:keydown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						updateActiveItemChip(allLink);
					}
				}}
				bind:this={allLink}
				class="rounded-full px-4 py-1 text-center hover:text-slate-600"
			>
				All
			</button>
			<button
				on:click={() => updateActiveItemChip(aboutLink)}
				bind:this={aboutLink}
				class="rounded-full px-4 py-1"
			>
				About
			</button>
			<button
				on:click={() => updateActiveItemChip(projectsLink)}
				on:keydown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						updateActiveItemChip(projectsLink);
					}
				}}
				bind:this={projectsLink}
				class="rounded-full px-4 py-1"
			>
				Projects
			</button>
			<button
				on:click={() => updateActiveItemChip(mediaLink)}
				bind:this={mediaLink}
				class="rounded-full px-4 py-1"
			>
				Media
			</button>
		</div>
	</nav>
</header>
