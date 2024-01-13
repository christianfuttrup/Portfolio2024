<script lang="ts">
	import moment from 'moment';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="!container prose mx-auto mt-24 rounded-lg bg-white p-12 lg:!w-[70%]">
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<span>Published at {moment().format(data.meta.date)}</span>
	</hgroup>

	<!-- Tags -->
	<div class="mt-5 flex gap-2">
		{#each data.meta.categories as category}
			<span class="rounded-3xl border bg-slate-200 px-4 py-2 text-sm">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<svelte:component this={data.content}></svelte:component>
</article>
