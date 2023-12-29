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
	let data = {};

	const postResponse = await fetch('/api/spotify', { method: 'POST' });
	const token = await postResponse.text();
	const url = 'https://api.spotify.com/v1/me/player/currently-playing';
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	// Check if the response is OK and has content
	if (response.ok && response.status !== 204) {
		data = await response.json();
	} else if (response.status === 204) {
		// Handle no content case
		data = { message: 'No music is currently playing', active: false };
	} else {
		// Handle other types of errors
		data = { error: await response.text() };
	}

	return new Response(JSON.stringify(data), {
		headers: {
			'content-type': 'application/json;charset=UTF-8'
		}
	});
};
