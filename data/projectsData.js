import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Digital Finance',
		url: 'digital-finance',
		category: 'Web Application',
		img: '/images/digital-finance-1.jpg',
		ProjectHeader: {
			title: 'igital Finance',
			publishDate: 'Mar 15, 2024',
			tags: 'Frontend / Backend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Digital Finance Platform',
				img: '/images/digital-finance-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Digital Finance Platform',
				img: '/images/digital-finance-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Digital Finance Platform',
				img: '/images/digital-finance-3.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://digitalfinance.shega.co/',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Digital Finance is a comprehensive financial news and analysis platform provided by Shega. It focuses on delivering up-to-date information on financial markets, trends, and digital finance innovations.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'typescript',
						'React',
						'TailwindCSS',
						'Next js',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails:[
				{
					"id": uuidv4(),
					"details": "Technologies Used: Frontend: React.js, Tailwind CSS; Backend: Node.js, Express.js; Database: MongoDB."
				},
				{
					"id": uuidv4(),
					"details": "Digital Finance offers valuable insights and expert opinions to help users stay informed about the financial industry."
				},
				{
					"id": uuidv4(),
					"details": "The platform is designed to be responsive and accessible, ensuring a seamless experience across devices."
				}
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 2,
		title: 'Tune Music Web',
		url: 'tune-music-web',
		category: 'Mobile Application',
		img: '/images/music-1.png',
		ProjectHeader: {
			title: 'Tune Music Web',
			publishDate: 'Jul 26, 2023',
			tags: 'Mobile Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Tune Music Agency',
				img: '/images/music-1.png',
			},
			{
				id: uuidv4(),
				title: 'Tune Music Agency',
				img: '/images/music-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Tune Music Agency',
				img: '/images/music-3.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://jima-dube.netlify.app',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Tune is a music streaming application that allows users to browse, stream, and create playlists of their favorite songs.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React',
						'TailwindCSS',
						'figma'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					"id": uuidv4(),
					"details": "Technologies Used: Frontend: React.js, Tailwind CSS; Backend: Node.js, Express.js; Database: MongoDB."
				},
				{
					"id": uuidv4(),
					"details": "Tune provides high-quality audio streaming and a personalized listening experience for users."
				},
				{
					"id": uuidv4(),
					"details": "The platform supports offline listening and integrates with social media for sharing playlists and tracks."
				}
			]
			,
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 3,
		title: 'E-commerce Web Application',
		url: 'e-commerce-web-application',
		category: 'UI/ Frontend / Backend ',
		img: '/images/ecommerce-web-1.jpg',
		ProjectHeader: {
			title: 'Project Management UI',
			publishDate: 'Apr 06, 2022',
			tags: 'UI/ Frontend / Backend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'E-commerce Web Application',
				img: '/images/ecommerce-web-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'E-commerce Web Application',
				img: '/images/ecommerce-web-3.jpg',
			},
			{
				id: uuidv4(),
				title: 'E-commerce Web Application',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Ecommerce is a fully functional online shopping platform. It allows users to browse products, add items to a cart, and complete purchases through a secure checkout process. Features include product listing and search, shopping cart functionality, user authentication and profiles, and order management and tracking.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					"id": uuidv4(),
					"details": "Technologies Used: Frontend: React.js, Bootstrap; Backend: Node.js, Express.js; Database: MongoDB."
				},
				{
					"id": uuidv4(),
					"details": "The platform provides a smooth shopping experience with responsive design and user-friendly navigation."
				},
				{
					"id": uuidv4(),
					"details": "Ecommerce ensures secure payment processing and supports multiple payment methods to cater to a diverse customer base."
				}
			]
			,
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 4,
		title: 'Learning Platform Web Application',
		url: 'learning-platform-web',
		category: 'UI / Frontend',
		img: '/images/lms-1.png',
		ProjectHeader: {
			title: 'Learning Platform Web App',
			publishDate: 'Oct 23, 2022',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'KLearning Platform Web App',
				img: '/images/lms-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'KLearning Platform Web App',
				img: '/images/lms-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'KLearning Platform Web App',
				img: '/images/lms-3.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://jima-dube.netlify.app',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Eduvi-E-learning is an educational platform that offers a variety of online courses. It provides tools for course creation, student enrollment, and progress tracking. Features include course catalog and enrollment, video lectures and quizzes, user profiles and progress tracking, and an admin panel for course management.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					"id": uuidv4(),
					"details": "Technologies Used: Frontend: React.js, Tailwind CSS; Backend: Node.js, Express.js; Database: MongoDB."
				},
				{
					"id": uuidv4(),
					"details": "Eduvi-E-learning delivers a comprehensive learning experience with interactive content and real-time feedback."
				},
				{
					"id": uuidv4(),
					"details": "The platform supports various multimedia formats to enhance the learning experience and keep users engaged."
				}
			]
			,
			SocialSharingHeading: 'Share This',

		},
	},
	{
		id: 5,
		title: 'Healthcare Management System',
		url: 'healthcare-management-system',
		category: 'Mobile Application',
		img: '/images/health-1.png',
		ProjectHeader: {
			title: 'Healthcare Management System',
			publishDate: 'Dec 25, 2023',
			tags: 'UI / Mobile',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Healthcare Management System',
				img: '/images/health-1.png',
			},
			{
				id: uuidv4(),
				title: 'Healthcare Management System',
				img: '/images/health-2.jpg',
			}
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Mobile Development',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'HealthAPP is a healthcare management system aimed at providing users with easy access to medical records, appointment scheduling, and health tracking. Features include user registration and authentication, medical records management, appointment scheduling, and health tracking and reminders.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React Native',
						'TailwindCSS',
						'Figma',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					"id": uuidv4(),
					"details": "Technologies Used: Mobile: React Native, Tailwind CSS; Backend: Node.js, Express.js; Database: MongoDB."
				},
				{
					"id": uuidv4(),
					"details": "HealthAPP ensures patient data security and offers a user-friendly interface for managing healthcare needs."
				},
				{
					"id": uuidv4(),
					"details": "The application integrates with various health monitoring devices to provide real-time updates and alerts."
				}
			]
			,
			SocialSharingHeading: 'Share This',
		},
	},
	// {
	// 	id: 6,
	// 	title: 'Apple New Design System',
	// 	url: 'apple-new-design-system',
	// 	category: 'Web Application',
	// 	img: '/images/web-project-1.jpg',
	// 	ProjectHeader: {
	// 		title: 'Apple New Design System',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 	},
	// },
];
