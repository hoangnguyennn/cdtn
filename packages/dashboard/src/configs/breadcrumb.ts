import { PATH_NAME } from '.';
import { IBreadCrumb } from '../interfaces';

export const Category = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Categories', url: PATH_NAME.CATEGORY_LIST },
];

export const Dashboard = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
];

export const OrderList = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Orders', url: PATH_NAME.ORDER_LIST },
];

export const ProductList = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Products', url: PATH_NAME.PRODUCT_LIST },
];

export const ProductAdd = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Products', url: PATH_NAME.PRODUCT_LIST },
	{ id: 'p3', title: 'Add', url: PATH_NAME.PRODUCT_ADD },
];

export const ProductEdit = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Products', url: PATH_NAME.PRODUCT_LIST },
	{ id: 'p3', title: 'Edit', url: PATH_NAME.PRODUCT_EDIT },
];

export const ProductUnitList = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Product Units', url: PATH_NAME.PRODUCT_UNIT_LIST },
];

export const ProductUnitAdd = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Product Units', url: PATH_NAME.PRODUCT_UNIT_LIST },
	{ id: 'p3', title: 'Add', url: PATH_NAME.PRODUCT_UNIT_ADD },
];

export const ProductUnitEdit = (): IBreadCrumb[] => [
	{ id: 'p1', title: 'Home', url: PATH_NAME.HOME },
	{ id: 'p2', title: 'Product Units', url: PATH_NAME.PRODUCT_UNIT_LIST },
	{ id: 'p3', title: 'Edit', url: PATH_NAME.PRODUCT_UNIT_EDIT },
];
