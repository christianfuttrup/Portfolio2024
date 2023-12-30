<script lang="ts">
	import type { SpotifyData } from '$lib/types/spotify';

	export let data: SpotifyData;
</script>

<div class="flex h-full font-sans">
	<div class="flex flex-col">
		<div class="flex flex-grow">
			<i class="fa-brands fa-spotify text-6xl text-[#1DB954]"></i>
		</div>
		{#if data.item}
			{#if data.is_playing}
				<div class="flex items-center gap-2 text-[#1DB954]">
					<i class="fa-solid fa-play fa-beat"> </i>
					<span class="font-bold">Listening to:</span>
				</div>

				{#if data.item.name}
					<p class="text-2xl font-bold">
						{data.item.name}
					</p>

					<p class="text-lg font-bold">
						{#each data.item.artists as artist, i}
							{#if i > 0}
								, {artist.name}
							{:else}
								{artist.name}
							{/if}
						{/each}
					</p>
				{/if}
			{:else if data.is_playing === false}
				<div class="flex items-center gap-2 text-orange">
					<i class="fa-solid fa-pause"> </i>
					<span class="font-bold">data paused:</span>
				</div>

				{#if data.item.name}
					<p class="text-2xl font-bold">
						{data.item.name}
					</p>

					<p class="text-lg font-bold">
						{#each data.item.artists as artist, i}
							{#if i > 0}
								, {artist.name}
							{:else}
								{artist.name}
							{/if}
						{/each}
					</p>
				{/if}
			{/if}
		{:else}
			<p>Spotify not playing</p>
			<p>Store somewhere what the last thing was played was</p>
		{/if}
	</div>
</div>
