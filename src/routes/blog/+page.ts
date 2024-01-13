import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		props: [
            // 5 blog posts
            {
                slug: 'post-1',
                title: 'Post 1',
                date: '2021-01-01',
                content: 'Post 1 content'
            },
            {
                slug: 'post-2',
                title: 'Post 2',
                date: '2021-01-02',
                content: 'Post 2 content'
            },
            {
                slug: 'post-3',
                title: 'Post 3',
                date: '2021-01-03',
                content: 'Post 3 content'
            },
            {
                slug: 'post-4',
                title: 'Post 4',
                date: '2021-01-04',
                content: 'Post 4 content'
            },
            {
                slug: 'post-5',
                title: 'Post 5',
                date: '2021-01-05',
                content: 'Post 5 content'
            }
        ]
	};
}) satisfies PageLoad;
