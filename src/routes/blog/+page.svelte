<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Christian Futtrup - Blog</title>
</svelte:head>

<main class="container mx-auto">
	<h1 class="mb-12 text-center text-4xl font-bold">Blog</h1>
	{#each data.props as article}
		<div class="flex justify-center">
			<div class="mb-4 flex w-3/4 gap-12 rounded-3xl border border-gray-300 bg-white p-12">
				<div class="image">
					<img src="/japan_trip.png" alt="Japan trip" class="h-32 w-32 rounded-full" />
				</div>
				<div>
					<h2 class="mb-4 text-2xl font-bold">{article.title}</h2>
					<p class="mb-4 text-gray-500">{article.content}</p>
					<a href={`/blog/${article.slug}`} class="text-blue-500 hover:underline"> Read more </a>
				</div>
			</div>
		</div>
	{/each}
</main>
