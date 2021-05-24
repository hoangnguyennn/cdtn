import { Types } from 'mongoose';
import { ProductStatuses, UserTypes } from './enums';

export interface IImageRequest {
	url: string;
}

export interface ILoginRequest {
	email: string;
	password: string;
}

export type IOrderCreate = Omit<IOrderRequest, 'items'> & {
	orderItemsId: string[];
};

export interface IOrderRequest {
	userId?: string;
	deliveryFullName: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryAddress: string;
	paymentMethodId: string;
	items: IOrderItemRequest[];
}

export interface IOrderItemRequest {
	productId: string;
	qty: number;
}

export interface IPayload {
	userId: string;
}

export interface IPaymentMethodResponse {
	id: string;
	name: string;
	imageUrl: string;
}

export interface IProductRequest {
	name: string;
	price: number;
	unit: Types.ObjectId;
	description?: string;
	status?: ProductStatuses;
}

export interface IProductResponse {
	id: string;
	name: string;
	price: number;
	unit: string;
	description?: string;
	status: ProductStatuses;
	images: string[];
}

export interface IProductUnitRequest {
	name: string;
}

export interface IRegisterRequest {
	email: string;
	password: string;
	fullName: string;
	phone: string;
}

export interface IServiceCommonResponse<T> {
	hasError: boolean;
	message?: string;
	data?: T;
}

export interface IUserResponse {
	id: string;
	email: string;
	fullName: string;
	phone: string;
	address: string;
}

export type IUserCreate = Omit<IRegisterRequest, 'password'> & {
	passwordHashed: string;
	userType: UserTypes;
};
