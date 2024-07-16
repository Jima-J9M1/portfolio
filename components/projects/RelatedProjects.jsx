import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const RelatedProject = {
	title: 'Related Projects',
	Projects: [
		{
			id: uuidv4(),
			title: 'Mobile UI',
			img: '/images/ecommerce-web-2.jpg',
		},
		{
			id: uuidv4(),
			title: 'Web Application',
			img: '/images/health-1.png',
		},
		{
			id: uuidv4(),
			title: 'UI Design',
			img: '/images/digital-finance-1.jpg',
		},
		{
			id: uuidv4(),
			title: 'Kabul Mobile App UI',
			img: '/images/lms-2.jpg',
		},
	],
};

function RelatedProjects() {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10 ">
				{RelatedProject.Projects.map((project, index) => {
					return (
						<div className='w-[300px] h-[200px]' key={index}>
						<Image
							src={project.img}
							className="rounded-xl cursor-pointer border shadow-md w-full h-full"
							width={500}
							height={500}
							alt={project.title}
							key={project.id}
						/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;
