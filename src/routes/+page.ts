import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch }) => {
	// Trigger the GET handler to fetch data from Spotify
	const getResponse = await fetch('/api/spotify');

	if (!getResponse.ok) {
		console.error('Failed to fetch data from Spotify:', await getResponse.text());
		return { props: { error: 'Failed to fetch data from Spotify' } };
	}

	const spotifyData = await getResponse.json();
	return { props: { spotifyData } };
}) satisfies PageLoad;
