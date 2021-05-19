import { UserTypes } from './enums';

export interface ILoginRequest {
	email: string;
	password: string;
}

export interface IServiceCommonResponse<T> {
	hasError: boolean;
	message?: string;
	data?: T;
}

export interface IPayload {
	userId: string;
}

export interface IProductTrendingResponse {
	id: string;
	name: string;
	price: number;
	image: string;
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
