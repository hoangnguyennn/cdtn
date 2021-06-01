import { ProductStatus } from './enum';

export interface IProduct {
	id: string;
	name: string;
	price: number;
	unit: string;
	description?: string;
	status: ProductStatus;
	images: string[];
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
	description?: string;
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
