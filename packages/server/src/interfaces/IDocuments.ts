import { Document, Types } from 'mongoose';

import { ProductStatuses, UserTypes } from './enums';

export interface IProduct extends Document {
	name: string;
	price: number;
	unit: Types.ObjectId;
	description?: string;
	status: ProductStatuses;
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
