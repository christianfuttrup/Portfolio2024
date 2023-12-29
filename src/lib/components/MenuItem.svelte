<script lang="ts">
	import { activeItem, menuItemWidth } from '$lib/stores/stores';

	export let title: string;

	function setActiveItem(title: string, event: MouseEvent) {
		if (event.target instanceof HTMLElement) {
			menuItemWidth.set(event.target.offsetWidth);
		}
		activeItem.set(title);
	}
</script>

<button
	class:active={$activeItem === title}
	on:click={(event) => setActiveItem(title, event)}
	on:keydown={(event) => {
		if (event.key === 'Enter') setActiveItem(title, new MouseEvent('click'));
	}}>{title}</button
>
