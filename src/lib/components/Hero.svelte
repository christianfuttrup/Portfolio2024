<script lang="ts">
	import Socials from './Socials.svelte';

	// Function for scrolling 100vh down when pressing icon
	function handleArrowClick() {
		window.scrollBy({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	}
</script>

<section id="hero" class="flex h-screen flex-col items-center justify-center bg-raisin text-white">
	<h1 class="text-6xl">Christian Futtrup</h1>
	<p class="mt-5 w-6/12 text-center text-lg">
		<b class="text-[#c3002f]">Angular</b> and <b class="text-[#ff4000]">Svelte</b> developer with a passion
		for exploring the world 🌎
	</p>
</section>

<div class="absolute bottom-5 left-[50%] right-[50%] text-white">
	<a on:click={handleArrowClick} href="#projects"
		><i class="fa-solid fa-chevron-down fa-2x fa-beat"></i></a
	>
</div>

<Socials />
