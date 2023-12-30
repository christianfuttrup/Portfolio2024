<script lang="ts">
	import moment from 'moment';
	import type { GitHubResponse } from '$lib/types/github';

	export let data: GitHubResponse;
</script>

<div class="flex h-full flex-col text-slate-800">
	{#if data}
		<div class="flex items-center gap-5 font-sans text-xl">
			<i class="fa-brands fa-github text-6xl text-slate-800"></i>
			<p class="text-2xl font-bold">{data.commit.committer.login}</p>
		</div>

		<div class="mt-auto flex flex-col leading-loose">
			<div class="flex items-center gap-2">
				<span class="mb-2 text-xl font-bold">Latest commit:</span>
			</div>

			<p class="flex items-center">
				<i class="fas fa-code-branch mr-3"></i><a
					class="hover:underline"
					target="_blank"
					href="https://github.com/{data.profile[0].repo.name}">{data.profile[0].repo.name}</a
				>
			</p>

			<p class="flex items-center">
				<i class="fa-regular fa-clock mr-3"></i>{moment(data.commit.commit.author.date).fromNow()}
			</p>
			<p class="flex items-center">
				<i class="fa-regular fa-comment-dots mr-3"></i>
				<a
					class="hover:underline"
					target="_blank"
					href="https://github.com/{data.profile.repo}/commit/{data.commit.sha}"
					>{data.commit.commit.message}</a
				>
			</p>
		</div>
	{/if}
</div>
