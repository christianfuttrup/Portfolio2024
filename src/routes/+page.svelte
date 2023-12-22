<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Projects from '$lib/components/Projects.svelte';

	// Function for scrolling 100vh up and down when pressing arrow keys
	function handleArrowKeyPress(event: KeyboardEvent) {
		event.preventDefault();
		if (event.key === 'ArrowDown') {
			window.scrollBy({
				top: window.innerHeight,
				behavior: 'smooth'
			});
		} else if (event.key === 'ArrowUp') {
			window.scrollBy({
				top: -window.innerHeight,
				behavior: 'smooth'
			});
		}
	}
</script>

<svelte:document on:keydown={handleArrowKeyPress} />

<Navigation />

<Hero />
<Projects />
