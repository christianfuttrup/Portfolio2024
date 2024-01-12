<script lang="ts">
	// Components
	import Profile from '$lib/widgets/Profile.svelte';
	import Spotify from '$lib/widgets/Spotify.svelte';
	import Github from '$lib/widgets/Github.svelte';
	import { activeItem } from '$lib/stores/stores';
	import { onDestroy, onMount } from 'svelte';

	import type { PageData } from './$types';
	import type { SpotifyData } from '$lib/types/spotify';
	import Timeline from '$lib/widgets/Timeline.svelte';
	import DarkMode from '$lib/widgets/DarkMode.svelte';

	export let data: PageData;

	let spotifyInterval: NodeJS.Timeout;

	onMount(() => {
		spotifyInterval = setInterval(() => {
			fetch('/api/spotify')
				.then((res) => res.json())
				.then((res: SpotifyData) => {
					data.props.spotifyData = res;
				});
		}, 30000);
	});

	onDestroy(() => {
		clearInterval(spotifyInterval);
	});
</script>

<div class="flex gap-5">
	<!-- 
		TODO: Add functionality to when you click on a card it folds out and shows more details
		This could be the spotify card showing the album cover and the github card showing the latest commit
		This can be done with position absolute and placing it in the center of the page
	-->

	<div class="container mx-auto grid gap-4 lg:grid-cols-4 lg:grid-rows-5">
		<div
			class="'profile' )} col-span-2 rounded-[32px] border border-blue-100 bg-blue-50
				p-12
			transition-transform"
			class:shadow-md={$activeItem === 'about'}
			class:opacity-30={$activeItem !== 'about' && $activeItem !== 'all'}
		>
			<Profile />
		</div>
		<div
			class="col-start-3 rounded-[32px] bg-white bg-[url('/japan_trip.png')] bg-cover bg-center p-8"
			class:shadow-md={$activeItem === 'about'}
			class:opacity-30={$activeItem !== 'about' && $activeItem !== 'all'}
		></div>
		<div class="col-start-4 row-span-2 rounded-[32px] bg-white p-8">
			<Timeline />
		</div>
		<div
			class="row-start-2 rounded-[32px] border border-green-200 bg-green-100 p-8"
			class:shadow-md={$activeItem === 'media'}
			class:opacity-30={$activeItem !== 'media' && $activeItem !== 'all'}
		>
			<Spotify data={data.props.spotifyData} />
		</div>
		<div
			class="col-span-2 row-start-2 rounded-[32px] bg-white p-8"
			class:shadow-md={$activeItem === 'projects'}
			class:opacity-30={$activeItem !== 'projects' && $activeItem !== 'all'}
		>
			<Github data={data.props.commit.data} />
		</div>
		<div class="col-span-2 col-start-3 row-start-3 rounded-[32px] bg-white p-8">6</div>
		<div class="col-start-1 row-span-2 row-start-3 rounded-[32px] bg-white p-8">7</div>
		<div class="relative col-start-2 row-start-3 rounded-[32px] bg-white p-8">
			<DarkMode />
		</div>
		<div class="col-start-2 row-start-4 rounded-[32px] bg-white p-8">9</div>
		<div class="col-start-3 row-start-4 rounded-[32px] bg-white p-8">10</div>
		<div
			class="col-start-4 row-start-4 rounded-[32px] bg-white bg-[url('/japan_trip.png')] bg-cover bg-center bg-no-repeat p-8"
		>
			<!-- plane emoji -->
		</div>
	</div>
</div>
