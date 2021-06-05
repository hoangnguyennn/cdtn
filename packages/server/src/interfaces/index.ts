import { Types } from 'mongoose';
import { OrderStatus, PaymentStatus, ProductStatus, UserType } from './enums';

export interface IImageCreate {
	url: string;
}

export interface IImageResponse {
	id: string;
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
	userId?: string | Types.ObjectId;
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryDate?: Date;
	paymentMethodId: string | Types.ObjectId;
	itemsId: string[] | Types.ObjectId[];
}

export interface IOrderCreateRequest {
	userId?: string;
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryDate?: Date;
	paymentMethodId: string | Types.ObjectId;
	items: IOrderItemCreateRequest[];
}

export interface IOrderItemCreate {
	productId: string | Types.ObjectId;
	price: number;
	qty: number;
}

export interface IOrderItemCreateRequest {
	productId: string | Types.ObjectId;
	qty: number;
}

export interface IOrderItemResponse {
	id: string | Types.ObjectId;
	productId: string | Types.ObjectId;
	price: number;
	qty: number;
	product?: IOrderItemProductResponse;
}

export interface IOrderItemProductResponse {
	name: string;
}

export interface IOrderResponse {
	id: string | Types.ObjectId;
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
	userId: string | Types.ObjectId;
	userType: string | UserType;
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
	id: string | Types.ObjectId;
	name: string;
	imageUrl: string;
	description?: string;
}

export interface IProductCreate {
	name: string;
	price: number;
	unitId: string | Types.ObjectId;
	description: string;
	status: ProductStatus;
	imagesId: string[] | Types.ObjectId[];
}

export interface IProductCreateRequest {
	name: string;
	price: number;
	unitId: string | Types.ObjectId;
	description?: string;
	status: ProductStatus;
	imagesUrl: string[];
}

export interface IProductResponse {
	id: string | Types.ObjectId;
	name: string;
	price: number;
	description: string;
	unit: string;
	images: string[];
}

export type IProductResponseForAdmin = Omit<
	IProductResponse,
	'unit' | 'images'
> & {
	unit?: IProductUnitResponse;
	images?: IImageResponse[];
	status: string;
};

export interface IProductUnitCreate {
	name: string;
}

export interface IProductUnitUpdate {
	name: string;
}

export interface IProductUnitResponse {
	id: string;
	name: string;
	description?: string;
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
	id: string | Types.ObjectId;
	email: string;
	fullName: string;
	address: string;
	phone: string;
	userType: UserType;
}

export interface IUserUpdateRequest {
	email: string;
	fullName: string;
	address: string;
	phone: string;
	password: string;
}

export interface IUserUpdate {
	email: string;
	fullName: string;
	address: string;
	phone: string;
	passwordHashed: string;
}
