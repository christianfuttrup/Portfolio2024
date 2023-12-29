import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		experience: [
			{
				title: 'Software Developer',
				company: 'Beumer Group',
				location: 'Aarhus, Denmark',
				start: 'Sept. 2019',
				end: 'Present',
				description:
					'In my current role at Beumer Group, I am an integral part of the team developing a sophisticated Angular-based enterprise application, with a keen focus on functionality and user experience. My journey here also includes temporarily assuming Scrum Master responsibilities, which enhanced my leadership abilities and deepened my understanding of agile methodologies.',
				technologies: [
					'Angular',
					'TypeScript',
					'RxJS',
					'Jasmine',
					'Karma',
					'Cypress',
					'Git',
					'Agile'
				]
			},
			{
				title: 'Software Engineer',
				company: 'Facebook',
				location: 'Menlo Park, CA',
				start: '2018-09-01',
				end: '2019-09-01',
				description: 'Worked on the Facebook Platform',
				technologies: ['JavaScript', 'React', 'Node.js']
			},
			{
				title: 'Software Engineer',
				company: 'Apple',
				location: 'Cupertino, CA',
				start: '2017-09-01',
				end: '2018-09-01',
				description: 'Worked on the Apple Platform',
				technologies: ['Swift', 'Objective-C', 'iOS']
			}
		]
	};
}) satisfies PageLoad;
