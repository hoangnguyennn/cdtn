import { Document, ObjectId } from 'mongoose';

import {
	OrderStatuses,
	PaymentStatuses,
	ProductStatuses,
	UserTypes,
} from './enums';

export interface IOrder extends Document {
	userId?: ObjectId;
	deliveryFullName: string;
	deliveryPhone: string;
	deliveryAddress: string;
	deliveryEmail: string;
	deliveryDate?: Date;
	paymentMethodId: ObjectId;
	paymentMethod?: IPaymentMethod;
	paymentStatus: PaymentStatuses;
	orderDate: Date;
	orderStatus: OrderStatuses;
	orderItemsId: ObjectId[];
	orderItem?: IOrderItem[];
}

export interface IOrderItem extends Document {
	productId: ObjectId;
	product?: IProduct;
	price: number;
	qty: number;
}

export interface IPaymentMethod extends Document {
	name: string;
	imageUrl: string;
	accessKey?: string;
	secretKey?: string;
	publicKey?: string;
	url?: string;
	description?: string;
}

export interface IProduct extends Document {
	name: string;
	price: number;
	unitId: ObjectId;
	unit?: IProductUnit;
	description?: string;
	status: ProductStatuses;
	imagesId: ObjectId[];
	images?: IProductImage[];
}

export interface IProductImage extends Document {
	url: string;
}

export interface IProductUnit extends Document {
	name: string;
}

export interface IUser extends Document {
	email: string;
	passwordHashed: string;
	fullName: string;
	phone: string;
	address: string;
	userType: UserTypes;
	isActivated: boolean;
}
