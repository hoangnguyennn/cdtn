export type IBreadcrumb = {
	id: string;
	name: string;
	url: string;
};

export type IProduct = {
	id: string;
	name: string;
	price: number;
	thumbnail: string;
	link?: string;
};

export type IWidget = {
	id: string;
	title: string;
	url: string;
};

export interface IUserRegister {
	email: string;
	passwordHashed: string;
	fullName: string;
	phone: string;
	userType: string;
}

export interface IUserResponse {
	_id: string;
	email: string;
	fullName: string;
	address: string;
	phone: string;
}

export interface IAuth {
	token: string;
	user: IUserResponse;
	message: string;
	hasError: boolean;
}

export interface IRegisterResponse {
	message: string;
}

export enum IUserType {
	CUSTOMER = 'CUSTOMER',
}

export interface IRootState {
	auth: IAuth;
}

export interface IRegisterForm {
	fullname: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface ILoginResponse {
	data: {
		token: string;
		user: IUserResponse;
	};
}
