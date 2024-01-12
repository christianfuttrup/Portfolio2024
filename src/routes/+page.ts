import type { GitHubCommit } from '$lib/types/github';
import type { SpotifyData } from '$lib/types/spotify';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch }) => {
	// Trigger the GET handler to fetch data from Spotify
	const spotifyResponse = await fetch('/api/spotify');
	const githubResponse = await fetch('/api/github');

	let spotifyData: SpotifyData = {} as SpotifyData;

	if (!spotifyResponse.ok) {
		console.error('Failed to fetch data from Spotify:', await spotifyResponse.text());
		spotifyData = {} as SpotifyData;
	}

	spotifyData = await spotifyResponse.json();
	const commit: { data: GitHubCommit } = await githubResponse.json();	

	return {
		props: { 
			spotifyData,
			commit
		}
	};
}) satisfies PageLoad;
