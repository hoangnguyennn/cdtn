import { IMenu } from '../interfaces';

const menu: IMenu[] = [
	{
		id: 1,
		title: 'Dashboard',
		href: '/',
		hasItems: false,
	},
	{
		id: 2,
		title: 'Products',
		hasItems: true,
		items: [
			{
				id: 21,
				title: 'List',
				href: '/products',
				hasItems: false,
			},
			{
				id: 22,
				title: 'Add',
				href: '/product/add',
				hasItems: false,
			},
		],
	},
	{
		id: 3,
		title: 'Product Units',
		hasItems: true,
		items: [
			{
				id: 31,
				title: 'List',
				href: '/product-units',
				hasItems: false,
			},
			{
				id: 32,
				title: 'Add',
				href: '/product-unit/add',
				hasItems: false,
			},
		],
	},
];

export default menu;
