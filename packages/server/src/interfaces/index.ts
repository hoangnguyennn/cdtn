import { Types } from 'mongoose';
import { ProductStatuses, UserTypes } from './enums';

export interface ICartItem {
	productId: string;
	qty: number;
}

export interface IImageRequest {
	url: string;
}

export interface ILoginRequest {
	email: string;
	password: string;
}

export interface IOrderRequest {
	userId?: string;
	deliveryFullName: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryAddress: string;
	note?: string;
	paymentMethod: string;
	cart: ICartItem[];
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

export interface IServiceCommonResponse<T> {
	hasError: boolean;
	message?: string;
	data?: T;
}

export interface IUserRegisterRequest {
	email: string;
	password: string;
	fullName: string;
	phone: string;
}

export interface IUserRegister extends IUserRegisterRequest {
	userType: UserTypes;
	passwordHashed: string;
}

export interface IUserResponse {
	id: string;
	email: string;
	fullName: string;
	phone: string;
	address: string;
}
