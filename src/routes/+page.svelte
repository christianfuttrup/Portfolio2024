<script lang="ts">
	import Profile from '$lib/widgets/Profile.svelte';
	import Spotify from '$lib/widgets/Spotify.svelte';
	import Github from '$lib/widgets/Github.svelte';

	import type { PageData } from './$types';
	import { activeItem } from '$lib/stores/stores';

	export let data: PageData;

	// Make the current song get fetched live (30 seconds interval)
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
			class:shadow-xl={$activeItem === 'about'}
			class:opacity-60={$activeItem !== 'about' && $activeItem !== 'all'}
		>
			<Profile />
		</div>
		<div
			class="col-start-3 rounded-[32px] bg-white bg-[url('/japan_trip.png')] bg-cover bg-center p-12"
			class:shadow-xl={$activeItem === 'about'}
			class:opacity-60={$activeItem !== 'about' && $activeItem !== 'all'}
		></div>
		<div class="col-start-4 row-span-2 rounded-[32px] bg-white p-12">3</div>
		<div
			class="row-start-2 rounded-[32px] border border-green-200 bg-green-100 p-12"
			class:shadow-xl={$activeItem === 'media'}
			class:opacity-60={$activeItem !== 'media' && $activeItem !== 'all'}
		>
			<Spotify data={data.props.spotifyData} />
		</div>
		<div class="col-span-2 row-start-2 rounded-[32px] bg-white p-12">5</div>
		<div class="col-span-2 col-start-3 row-start-3 rounded-[32px] bg-white p-12">6</div>
		<div class="col-start-1 row-span-2 row-start-3 rounded-[32px] bg-white p-12">7</div>
		<div class="relative col-start-2 row-start-3 rounded-[32px] bg-slate-700 p-12">
			<Github />
		</div>
		<div class="col-start-2 row-start-4 rounded-[32px] bg-white p-12">9</div>
		<div class="col-start-3 row-start-4 rounded-[32px] bg-white p-12">10</div>
		<div
			class="col-start-4 row-start-4 rounded-[32px] bg-white bg-[url('/japan_trip.png')] bg-cover bg-center bg-no-repeat p-12"
		>
			<!-- plane emoji -->
		</div>
	</div>
</div>
