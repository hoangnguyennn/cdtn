import { PATH_NAME } from '.';
import { IBreadCrumb } from '../interfaces';

export const Dashboard = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Dashboard', url: PATH_NAME.HOME },
];

export const ProductList = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Dashboard', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Products', url: PATH_NAME.PRODUCT_LIST },
];

export const ProductAdd = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Dashboard', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Products', url: PATH_NAME.PRODUCT_LIST },
	{ id: 'p3', title: 'Add', url: PATH_NAME.PRODUCT_ADD },
];

export const ProductUnitList = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Dashboard', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Product Units', url: PATH_NAME.PRODUCT_UNIT_LIST },
];

export const ProductUnitAdd = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Dashboard', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Product Units', url: PATH_NAME.PRODUCT_UNIT_LIST },
	{ id: 'p3', title: 'Add', url: PATH_NAME.PRODUCT_UNIT_ADD },
];
