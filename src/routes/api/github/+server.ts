import type { GitHubCommit, GitHubData } from '$lib/types/github';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const url = 'https://api.github.com/users/christianfuttrup/events/public';
	const profileResponse = await fetch(url, {
		headers: {
			Authorization: `${import.meta.env.GITHUB_TOKEN}`
		}
	});

	if (!profileResponse.ok) {
		return new Response(JSON.stringify({ error: 500, status: 'Failed to fetch data from Github' }));
	}

	const githubData: GitHubData = await profileResponse.json();
	const latestCommitResponse = await fetch(githubData[0].payload.commits[0].url);
	const commitData: GitHubCommit = await latestCommitResponse.json();

	return new Response(JSON.stringify({ profile: githubData, commit: commitData }), {});
};
