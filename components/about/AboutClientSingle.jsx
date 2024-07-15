import Image from 'next/image';

function AboutClientSingle({ title, image }) {
	return (
		<div className="py-5 px-10 border  bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer h-[300px]  flex justify-center items-center">
			<Image
				src={image}
				alt={title}
				layout="responsive"
				width={80}
				height={50}
			/>
		</div>
	);
}

export default AboutClientSingle;
