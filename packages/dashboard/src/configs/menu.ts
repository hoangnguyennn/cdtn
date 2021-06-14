import { PATH_NAME } from '.';
import { IMenu, IMenuWithoutId } from '../interfaces';

const menuWithoutId: IMenuWithoutId[] = [
	{
		title: 'Dashboard',
		href: PATH_NAME.HOME,
		hasItems: false,
	},
	{
		title: 'Products',
		hasItems: true,
		items: [
			{
				title: 'List',
				href: PATH_NAME.PRODUCT_LIST,
				hasItems: false,
			},
			{
				title: 'Add',
				href: PATH_NAME.PRODUCT_ADD,
				hasItems: false,
			},
		],
	},
	{
		title: 'Product Units',
		hasItems: true,
		items: [
			{
				title: 'List',
				href: PATH_NAME.PRODUCT_UNIT_LIST,
				hasItems: false,
			},
			{
				title: 'Add',
				href: PATH_NAME.PRODUCT_UNIT_ADD,
				hasItems: false,
			},
		],
	},
	{
		title: 'Categories',
		hasItems: true,
		items: [
			{
				title: 'List',
				href: PATH_NAME.CATEGORY_LIST,
				hasItems: false,
			},
			{
				title: 'Add',
				href: PATH_NAME.CATEGORY_ADD,
				hasItems: false,
			},
		],
	},
	{
		title: 'Orders',
		hasItems: true,
		items: [
			{
				title: 'List',
				href: PATH_NAME.ORDER_LIST,
				hasItems: false,
			},
		],
	},
];

const menu: IMenu[] = menuWithoutId.map((menu, index) => {
	if (!menu.hasItems) {
		return {
			...menu,
			id: index,
			items: undefined,
		};
	}

	return {
		...menu,
		id: index,
		items: menu.items?.map((item, idx) => {
			return {
				...item,
				id: `${index}${idx}`,
				items: undefined,
			};
		}),
	};
});

export default menu;
