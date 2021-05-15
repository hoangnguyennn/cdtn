import i18n from '../locales';
import { IBreadcrumb } from '../models';
import { PATH_NAME } from './pathName';

export const productsPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Products'), url: PATH_NAME.PRODUCTS },
];

export const productPage = (
	title: string,
	id: string | number
): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Products'), url: PATH_NAME.PRODUCTS },
	{ id: 'p3', name: title, url: `${PATH_NAME.PRODUCTS}/${id}` },
];

export const cartPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Cart'), url: PATH_NAME.CART },
];

export const loginPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Login'), url: PATH_NAME.LOGIN },
];

export const registerPage = (): IBreadcrumb[] => [
	{ id: 'p1', name: i18n.t('Home'), url: PATH_NAME.HOME },
	{ id: 'p2', name: i18n.t('Register'), url: PATH_NAME.REGISTER },
];
