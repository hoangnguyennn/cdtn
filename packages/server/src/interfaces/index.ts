import { Types } from 'mongoose';
import { OrderStatus, PaymentStatus, ProductStatus, UserType } from './enums';

export interface IImageCreate {
	url: string;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface ILoginResponse {
	token: string;
	user?: IUserResponse;
}

export interface IOrderCreate {
	userId?: Types.ObjectId;
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryDate?: Date;
	paymentMethodId: Types.ObjectId;
	itemsId: Types.ObjectId[];
}

export interface IOrderCreateRequest {
	userId?: Types.ObjectId;
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryDate?: Date;
	paymentMethodId: Types.ObjectId;
	items: IOrderItemCreate[];
}

export interface IOrderItemCreate {
	productId: Types.ObjectId;
	qty: number;
}

export interface IOrderItemResponse {
	id: string;
	productId: Types.ObjectId;
	price: number;
	qty: number;
}

export interface IOrderResponse {
	id: string;
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryDate?: Date;
	paymentStatus: PaymentStatus;
	orderStatus: OrderStatus;
	orderDate: Date;

	user?: IUserResponse;
	paymentMethod: IPaymentMethodResponse;
	items: IOrderItemResponse[];
}

export interface IPayload {
	userId: string;
}

export interface IPaymentMethodCreate {
	name: string;
	imageUrl: string;
	accessKey?: string;
	secretKey?: string;
	publicKey?: string;
	host?: string;
	description?: string;
}

export interface IPaymentMethodResponse {
	id: string;
	name: string;
	imageUrl: string;
	description?: string;
}

export interface IProductCreate {
	name: string;
	price: number;
	unitId: Types.ObjectId;
	description: string;
	status: ProductStatus;
	imagesId: Types.ObjectId[];
}

export interface IProductCreateRequest {
	name: string;
	price: number;
	unitId: Types.ObjectId;
	description: string;
	status: ProductStatus;
	imagesUrl: string[];
}

export interface IProductResponse {
	id: string;
	name: string;
	price: number;
	description: string;
	unit: string;
	images: string[];
}

export interface IProductUnitCreate {
	name: string;
}

export interface IUserCreate {
	email: string;
	passwordHashed: string;
	fullName: string;
	phone: string;
	userType: UserType;
	isActivated: boolean;
}

export interface IUserCreateRequest {
	email: string;
	password: string;
	fullName: string;
	phone: string;
}

export interface IUserResponse {
	id: string;
	email: string;
	fullName: string;
	address: string;
	phone: string;
	userType: UserType;
}
