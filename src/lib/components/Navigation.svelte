<!-- @ts-ignore  -->
<script lang="ts">
	// Small hack since the current compiler doesn't know about the popover API
	let popover: any = { popover: 'auto' };
	let popovertarget: any = { popovertarget: 'navigation' };

	let menuOpen: boolean = false;
</script>

<button
	on:click={() => (menuOpen = !menuOpen)}
	{...popovertarget}
	class="absolute right-10 top-10 h-10 w-10 text-white hover:text-gray-300"
	><i class:fa-bars={!menuOpen} class:fa-times={menuOpen} class="fa-solid fa-2x"></i></button
>

<div {...popover} id="navigation">Hello</div>

<style>
	[popover] {
		inset: unset;
		right: 2.5rem;
		top: 7rem;
	}
</style>
