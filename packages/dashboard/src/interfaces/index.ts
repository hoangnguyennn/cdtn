import { ProductStatuses } from './enum';

export interface IProduct {
	id: string;
	name: string;
	price: number;
	unit: string;
	description?: string;
	status: ProductStatuses;
	images: string[];
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
