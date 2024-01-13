<script lang="ts">
	import moment from 'moment';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Christian Futtrup - Blog</title>
</svelte:head>

<main class="container mx-auto">
	<h1 class="mb-12 text-center text-4xl font-bold">Blog</h1>
	{#each data.posts as post}
		<div class="flex justify-center">
			<div class="mb-4 flex w-3/4 gap-12 rounded-3xl border border-gray-300 bg-white p-12">
				<div class="image">
					<img src="/japan_trip.png" alt="Japan trip" class="h-32 w-32 rounded-full" />
				</div>
				<div>
					<h2 class="text-2xl font-bold">{post.title}</h2>
					<small class="mb-4 block">Published {moment().format(post.date)}</small>
					<p class="mb-4 text-gray-500">{post.description}</p>
					<a href={`/blog/${post.slug}`} class="text-blue-500 hover:underline"> Read more </a>
				</div>
			</div>
		</div>
	{/each}
</main>
