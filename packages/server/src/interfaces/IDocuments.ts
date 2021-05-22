import { Document, Types } from 'mongoose';

import { ProductStatuses, UserTypes } from './enums';

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
	unitId: Types.ObjectId;
	unit?: IProductUnit;
	description?: string;
	status: ProductStatuses;
	imagesId: Types.ObjectId[];
	images?: IProductImage[];
}

export interface IProductImage extends Document {
	imageUrl: string;
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
