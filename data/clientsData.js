import { v4 as uuidv4 } from 'uuid';

// Import images
import ShegaImage from '../public/images/brands/shega.png';
import A2SVImage from '../public/images/brands/A2SV.jpg';
import GDSCImage from '../public/images/brands/gdsc.png';
import KurazImage from '../public/images/brands/kuraz.jpg';


export const clientsHeading = 'Some of the brands I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Shega',
		img: ShegaImage,
	},
	{
		id: uuidv4(),
		title: 'A2SV',
		img: A2SVImage,
	},
	{
		id: uuidv4(),
		title: 'Google Developer School Club',
		img: GDSCImage,
	},
	{
		id: uuidv4(),
		title: 'Kuraz',
		img: KurazImage,
	},
];
