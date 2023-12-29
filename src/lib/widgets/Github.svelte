<script lang="ts">
	import type { GitHubCommit } from '$lib/types/github';
	import moment from 'moment';

	export let data: GitHubCommit;
</script>

<div class="flex h-full flex-col text-slate-800">
	{#if data}
		<div class="flex items-center gap-5 font-sans text-xl">
			<i class="fa-brands fa-github text-6xl text-slate-800"></i>
			<p class="text-2xl font-bold">{data.committer.login}</p>
		</div>

		<div class="mt-auto flex flex-col leading-loose">
			<div class="flex items-center gap-2">
				<span class="mb-2 text-xl font-bold">Latest commit:</span>
			</div>

			<p class="flex items-center">
				<i class="fas fa-code-branch mr-3"></i><a
					class="hover:underline"
					target="_blank"
					href="https://github.com/{data.repository.name}">{data.repository.name}</a
				>
			</p>
			<p class="flex items-center">
				<i class="fa-regular fa-clock mr-3"></i>{moment(data.commit.committer.date).fromNow()}
			</p>
			<p class="flex items-center">
				<i class="fa-regular fa-comment-dots mr-3"></i>
				<a
					class="hover:underline"
					target="_blank"
					href="https://github.com/{data.repository.name}/commit/{data.sha}"
					>{data.commit.message}</a
				>
			</p>
		</div>
	{/if}
</div>
