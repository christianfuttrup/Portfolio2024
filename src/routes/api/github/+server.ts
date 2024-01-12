import type { GithubData } from '$lib/types/github';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	let githubData: Array<GithubData> = [];

	const url = 'https://api.github.com/users/christianfuttrup/events/public';
	const profileResponse = await fetch(url, {
		headers: {
			Authorization: `${import.meta.env.GITHUB_TOKEN}`
		}
	});

	if (!profileResponse.ok) {
		return new Response(JSON.stringify({ error: 500, status: 'Failed to fetch data from Github' }));
	} 

	githubData = await profileResponse.json();

	const latestCommit = githubData.filter((data: GithubData) => data.type === 'PushEvent' && data.repo.name === 'christianfuttrup/Portfolio2024').shift();	

	return new Response(JSON.stringify({ data: latestCommit })); 
};
