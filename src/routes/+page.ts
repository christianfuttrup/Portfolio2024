import type { GitHubCommit, GitHubData } from '$lib/types/github';
import type { SpotifyData } from '$lib/types/spotify';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch }) => {
	// Trigger the GET handler to fetch data from Spotify
	const spotifyResponse = await fetch('/api/spotify');
	const githubResponse = await fetch('https://api.github.com/users/christianfuttrup/events/public');

	let spotifyData: SpotifyData = {} as SpotifyData;
	let githubData: GitHubData[] | { error: string } = [];
	let commitData: GitHubCommit = {} as GitHubCommit;

	if (!spotifyResponse.ok) {
		console.error('Failed to fetch data from Spotify:', await spotifyResponse.text());
		spotifyData = {} as SpotifyData;
	}

	if (!githubResponse.ok) {
		console.error('Failed to fetch data from Github:', await githubResponse.text());
		githubData = { error: await githubResponse.text() };
	}

	spotifyData = await spotifyResponse.json();
	githubData = await githubResponse.json();

	const latestCommitResponse = await fetch(githubData[0].payload.commits[0].url);

	commitData = await latestCommitResponse.json();

	return {
		props: {
			spotifyData,
			githubData,
			commitData: {
				sha: githubData[0].payload.commits[0].sha,
				commit: commitData.commit,
				committer: commitData.committer,
				repository: githubData[0].repo
			}
		}
	};
}) satisfies PageLoad;
