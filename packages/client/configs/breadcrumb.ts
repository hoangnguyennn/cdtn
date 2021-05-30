import { IBreadcrumb } from '../interfaces';
import { PATH_NAME } from './pathName';
import i18n from '../locales';

export const cartPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Cart'), url: PATH_NAME.CART },
];

export const loginPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Login'), url: PATH_NAME.LOGIN },
];

export const myAccountPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('My account'), url: PATH_NAME.MY_ACCOUNT },
];

export const myOrderPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('My orders'), url: PATH_NAME.MY_ORDER },
];

export const productPage = (
	title: string,
	id: string | number
): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Products'), url: PATH_NAME.PRODUCTS },
	{ id: 'p3', name: title, url: `${PATH_NAME.PRODUCTS}/${id}` },
];

export const productsPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Products'), url: PATH_NAME.PRODUCTS },
];

export const registerPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Register'), url: PATH_NAME.REGISTER },
];
