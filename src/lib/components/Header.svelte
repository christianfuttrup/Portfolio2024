<script>
	import Socials from './Socials.svelte';
	import { page } from '$app/stores';
</script>

<header
	class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
>
	<div class="flex h-screen flex-col font-sans text-white text-opacity-90">
		<div class="flex flex-col">
			<h1 class="mb-3 text-5xl font-bold">Christian Futtrup</h1>
			<h2 class="text-lg font-bold">Experienced Software developer</h2>
			<p class="mt-5 text-slate-400">
				I build seamless user experiences with <br />
				Angular and Svelte.
			</p>
		</div>

		<nav class="mt-14 text-slate-400">
			<li>
				<a href="#about" class:text-white={$page.url.hash === '' || $page.url.hash === '#about'}>
					About
				</a>
			</li>
			<li>
				<a href="#projects" class:text-white={$page.url.hash === '#projects'}> Projects </a>
			</li>
			<li>
				<a href="#experiences" class:text-white={$page.url.hash === '#experiences'}>
					Experiences
				</a>
			</li>
		</nav>

		<div class="mt-auto">
			<Socials />
		</div>
	</div>
</header>
