export interface IBreadcrumb {
	id: string;
	name: string;
	url: string;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface ILoginResponse {
	token: string;
	user: IUserResponse;
}

export interface IProduct {
	id: string;
	name: string;
	price: number;
	thumbnail: string;
	link?: string;
}

export interface IProductResponse {
	id: string;
	name: string;
	price: number;
	unit: string;
	description?: string;
	status: string;
	images: string[];
}

export interface IRegisterForm extends IUserRegister {
	confirmPassword: string;
}

export interface IUserRegister {
	email: string;
	password: string;
	fullName: string;
	phone: string;
}

export interface IUserResponse {
	id: string;
	email: string;
	fullName: string;
	phone: string;
	address: string;
}

export interface IWidget {
	id: string;
	title: string;
	url: string;
}
