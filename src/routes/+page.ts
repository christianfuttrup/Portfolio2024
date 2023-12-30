import type { GitHubResponse } from '$lib/types/github';
import type { SpotifyData } from '$lib/types/spotify';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch }) => {
	// Trigger the GET handler to fetch data from Spotify
	const spotifyResponse = await fetch('/api/spotify');
	const githubResponse = await fetch('/api/github');

	let spotifyData: SpotifyData = {} as SpotifyData;
	let githubData: GitHubResponse = {} as GitHubResponse;

	if (!spotifyResponse.ok) {
		console.error('Failed to fetch data from Spotify:', await spotifyResponse.text());
		spotifyData = {} as SpotifyData;
	}

	spotifyData = await spotifyResponse.json();
	githubData = await githubResponse.json();

	return {
		props: {
			spotifyData,
			githubData,
			commitData: {
				sha: githubData.commit.sha,
				commit: githubData.commit,
				committer: githubData.commit.committer,
				repository: githubData.profile.repo
			}
		}
	};
}) satisfies PageLoad;
