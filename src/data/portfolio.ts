export const portfolio = {
	personal: {
		name: 'Evander V. Wines',
		address: 'M79 St. Sta. Lucia, Pasig City',
		email: 'winesevander@gmail.com',
		github: 'https://github.com/evanderwines',
	},
	summary:
		'Innovative Computer Science student building practical web systems with a focus on clean interfaces and reliable application logic.',
	roles: [
		'Computer Science',
		'Programming Competitor',
	],
	stats: [
		{
			value: 'DOST',
			label: 'Scholar for excellence in science and technology.',
		},
		{
			value: 'Grand Finalist',
			label: 'OGIS Ignite 2025 hosted by OGIS Philippines, Inc.',
		},
		{
			value: '2nd Place',
			label: 'Java Programming, UMAK IT Skills Olympics',
		},
	],
	experience: [
		{
			title: 'School Representative - Java Programming',
			organization: 'UMAK IT Skills Olympics',
			date: 'November 2025',
			role: 'School Representative',
			details: [
				'Won second place in the Java Programming category.',
				'Competed against more than 40 universities in the Philippines.',
			],
		},
		{
			title: 'CodeChum NPC 2025',
			organization: 'CodeChum NPC',
			date: 'October 2025',
			role: 'Participant',
			details: [
				'Participated in a programming competition against 60 universities in the Philippines.',
			],
		},
		{
			title: 'OGIS PH IGNITE 2025',
			organization: 'OGIS Philippines, Inc.',
			date: 'October 2025',
			role: 'Finalist / Participant',
			details: [
				'Grand finalist of OGIS Ignite 2025 hosted by OGIS Philippines, Inc.',
				'Event held at AIM Conference Center, Makati.',
				'Participated in the FIT Academy.',
			],
		},
		{
			title: 'CodeChum NPC 2024',
			organization: 'CodeChum NPC',
			date: 'November 2024',
			role: 'Participant',
			details: [
				'Participated in a programming competition against 60 universities in the Philippines.',
			],
		},
		{
			title: 'Participant - YESES CYPE Hackathon (4th Place)',
			organization: 'YESES CYPE Hackathon',
			date: 'April 2024',
			role: 'Hackathon Participant',
			details: [
				'Collaborated in a team to design and develop a functional education technology solution.',
				'Built the system frontend in a few minutes.',
				'Contributed to system backend development.',
				'Achieved 4th place among competing teams.',
			],
		},
	],
	projects: [
		{
			name: 'Arellano University Alumni Tracking System',
			status: 'Present',
			type: 'Alumni Platform',
			imageKey: 'alumni',
			description: [
				'Developed an alumni management platform focused on professional networking and job opportunities.',
				'Designed the social interaction surface for alumni engagement.',
				'Implemented features related to alumni tracking and opportunity discovery.',
			],
			tools: ['React', 'Laravel', 'MySQL', 'TypeScript'],
		},
		{
			name: 'Arellano LMS',
			status: 'Present',
			type: 'Learning Management System',
			imageKey: 'arellanoLms',
			description: [
				'Built learning workflows for students and instructors in an academic web system.',
				'Created organized screens for coursework, modules, and class management.',
				'Focused on clear navigation and practical school operations.',
			],
			tools: ['React', 'Laravel', 'MySQL', 'TypeScript'],
		},
		{
			name: 'Clever Traveller',
			status: 'Prototype',
			type: 'Travel Discovery App',
			imageKey: 'cleverTraveller',
			description: [
				'Designed a mobile travel discovery experience for browsing Philippine destinations.',
				'Created destination cards, trend sections, and visual browsing flows.',
				'Focused on a clean mobile interface for quick place exploration.',
			],
			tools: ['Mobile UI', 'Travel App', 'Frontend'],
		},
		{
			name: 'Task Management System',
			status: 'Completed',
			type: 'Productivity Dashboard',
			imageKey: 'taskManagement',
			description: [
				'Built a project and task management dashboard for organizing work.',
				'Created modal workflows for adding projects, priorities, due dates, and members.',
				'Designed responsive admin-style screens for repeated productivity tasks.',
			],
			tools: ['Dashboard', 'JavaScript', 'UI Design'],
		},
		{
			name: 'Ticket Management System',
			status: 'Completed',
			type: 'Technical Support System',
			imageKey: 'ticketManagement',
			description: [
				'Developed a technical support dashboard for tickets, equipment, and user monitoring.',
				'Built status summaries and chart-based views for support activity.',
				'Organized admin navigation for accounts, equipment, and ticket workflows.',
			],
			tools: ['Dashboard', 'Charts', 'Admin System'],
		},
	],
	skillGroups: [
		{
			title: 'Languages',
			items: ['JavaScript', 'TypeScript', 'Visual Basic', '.NET Programming'],
		},
		{
			title: 'Frontend',
			items: ['React', 'Express.js'],
		},
		{
			title: 'Backend',
			items: ['Laravel'],
		},
		{
			title: 'Databases',
			items: ['MongoDB', 'MySQL', 'MS SQL Server'],
		},
	],
	education: {
		degree: 'Bachelor of Science in Computer Science',
		institution: 'Arellano University',
		period: '2023 - 2026',
		activities: ['Representative from CSS organization'],
	},
} as const
