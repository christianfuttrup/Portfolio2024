import { type Writable, writable } from 'svelte/store';

export const activeItem: Writable<string> = writable('All');
export const menuItemWidth: Writable<number> = writable(0);
export const currentSong: Writable<{ song: string; artists: [] }> = writable({
	song: '',
	artists: []
});
