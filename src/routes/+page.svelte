<script lang="ts">
	import Profile from '$lib/widgets/Profile.svelte';
	import Spotify from '$lib/widgets/Spotify.svelte';
	import Github from '$lib/widgets/Github.svelte';

	import type { SpotifyResponse } from '$lib/types/spotify';
	import { onDestroy, onMount } from 'svelte';
	import { currentSong } from '$lib/stores/stores';

	export let data: SpotifyResponse;

	// Make the current song get fetched live (30 seconds interval)
</script>

<div class="flex gap-5">
	<!-- Profile card -->

	<div class="container mx-auto grid gap-4 lg:grid-cols-4 lg:grid-rows-5">
		<div class="col-span-2 rounded-3xl bg-blue-50 p-12">
			<Profile />
		</div>
		<div class="col-start-3 rounded-[32px] bg-white p-12"></div>
		<div class="col-start-4 row-span-2 rounded-[32px] bg-white p-12">3</div>
		<div class="row-start-2 rounded-[50px] bg-green-100 p-12">
			<Spotify {data} />
		</div>
		<div class="col-span-2 row-start-2 rounded-[32px] bg-white p-12">5</div>
		<div class="col-span-2 col-start-3 row-start-3 rounded-[32px] bg-white p-12">6</div>
		<div class="col-start-1 row-span-2 row-start-3 rounded-[32px] bg-white p-12">7</div>
		<div class="relative col-start-2 row-start-3 rounded-[32px] bg-slate-700 p-12">
			<Github />
		</div>
		<div class="col-start-2 row-start-4 rounded-[32px] bg-white p-12">9</div>
		<div class="col-start-3 row-start-4 rounded-[32px] bg-white p-12">10</div>
		<div class="col-start-4 row-start-4 rounded-[32px] bg-white p-12">11</div>
	</div>
</div>
