import type { RequestHandler } from './$types';

import { Buffer } from 'buffer';

export const POST: RequestHandler = async () => {
	const tokenCredentials = Buffer.from(
		`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
	).toString('base64');
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${tokenCredentials}`
		},
		body: `grant_type=refresh_token&refresh_token=${import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN}`
	});

	if (response.ok) {
		const data = await response.json();
		const accessToken = data.access_token;

		// Store the new access token in your storage
		return new Response(accessToken);
	} else {
		return new Response('Failed to fetch access token');
	}
};

export const GET: RequestHandler = async ({ fetch }) => {
	const postResponse = await fetch('/api/spotify', { method: 'POST' });

	const token = await postResponse.text();
	const url = 'https://api.spotify.com/v1/me/player/currently-playing';
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}}`
		}
	});

	if (!response.ok) {
		if (response.status === 401) {
			if (!postResponse.ok) {
				return new Response(JSON.stringify({ error: 'Failed to refresh access token' }), {
					status: 500
				});
			}
		} else {
			return new Response('Failed to fetch data', { status: 500 });
		}
	}

	const data = await response.json();

	return new Response(JSON.stringify(data), {
		headers: {
			'content-type': 'application/json;charset=UTF-8'
		}
	});
};
