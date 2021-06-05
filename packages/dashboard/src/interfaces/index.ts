import { ProductStatus } from './enum';

export interface IBreadCrumb {
	id: string;
	title: string;
	url: string;
}

export interface IImage {
	id: string;
	url: string;
}

export interface IProduct {
	id: string;
	name: string;
	price: number;
	description: string;
	unit?: IProductUnit;
	images?: IImage[];
	status: string;
}

export interface IProductCreate {
	name: string;
	price: number;
	unitId: string;
	description: string;
	status: ProductStatus;
	imagesUrl: string[];
}

export interface IProductUnit {
	id: string;
	name: string;
}

export interface IProductUnitCreate {
	name: string;
}

export interface IMenu {
	id: string | number;
	title: string;
	href?: string;
	hasItems: boolean;
	items?: IMenu[];
}

export interface IUser {
	id: string;
	email: string;
	fullName: string;
	address: string;
	phone: string;
	userType: string;
}
