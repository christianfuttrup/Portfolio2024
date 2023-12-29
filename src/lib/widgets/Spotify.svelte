<script lang="ts">
	import { currentSong } from '$lib/stores/stores';
	import type { SpotifyResponse } from '$lib/types/spotify';

	// export let track: string;
	export let data: SpotifyResponse;
</script>

<div class="flex h-full font-sans">
	<div class="flex flex-col">
		<div class="flex flex-grow">
			<i class="fa-brands fa-spotify text-6xl text-[#1DB954]"></i>
		</div>
		{#if data.props.spotifyData.is_playing}
			<div class="flex items-center gap-2 text-[#1DB954]">
				<i class="fa-solid fa-play fa-beat"> </i>
				<span class="font-bold">Listening to:</span>
			</div>
		{:else if data.props.spotifyData.is_playing === false}
			<div class="flex items-center gap-2 text-orange">
				<i class="fa-solid fa-pause"> </i>
				<span class="font-bold">Offline. Last listened to:</span>
			</div>
		{:else}
			<div class="flex items-center gap-2 text-red-500">
				<i class="fa-solid fa-question-mark"> </i>
				<span class="font-bold">Spotify unavailable</span>
			</div>
		{/if}

		{#if data.props.spotifyData}
			<p class="text-2xl font-bold">
				{data.props.spotifyData.item.name}
			</p>

			<p class="text-lg font-bold">
				{#each data.props.spotifyData.item.artists as artist, i}
					{#if i > 0}
						, {artist.name}
					{:else}
						{artist.name}
					{/if}
				{/each}
			</p>
		{/if}
	</div>
</div>
