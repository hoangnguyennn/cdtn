import { OrderStatus, PaymentStatus, ProductStatus } from './enum';

export interface IBreadCrumb {
	id: string;
	title: string;
	url: string;
}

export interface ICategory {
	id: string;
	name: string;
	slug: string;
}

export interface ICategoryCreate {
	name: string;
	slug: string;
}

export interface IImage {
	id: string;
	url: string;
	publicId: string;
}

export interface IOrder {
	id: string;
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryDate?: number;
	paymentStatus: PaymentStatus;
	orderStatus: OrderStatus;
	orderDate: number;

	user?: IUser;
	paymentMethod: IPaymentMethod;
	items: IOrderItem[];
}

export interface IOrderItem {
	id: string;
	productId: string;
	price: number;
	qty: number;
	product?: { name: string };
}

export interface IPaymentMethod {
	id: string;
	name: string;
	imageUrl: string;
	description?: string;
}

export interface IProduct {
	id: string;
	name: string;
	price: number;
	description: string;
	unit?: IProductUnit;
	images?: IImage[];
	status: string;
	category?: ICategory;
	longDescription: string;
}

export interface IProductCreate {
	name: string;
	price: number;
	unitId: string;
	description: string;
	status: ProductStatus;
	images: IUpload[];
	categoryId: string;
	longDescription: string;
}

export type IProductUpdate = Omit<IProductCreate, 'images'> & {
	images: (IUpload | { id: string })[];
};

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

export interface IMenuWithoutId {
	title: string;
	href?: string;
	hasItems: boolean;
	items?: IMenuWithoutId[];
}

export interface IUser {
	id: string;
	email: string;
	fullName: string;
	address: string;
	phone: string;
	userType: string;
}

export interface IUpload {
	url: string;
	publicId: string;
}
