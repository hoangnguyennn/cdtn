export interface IBreadcrumb {
	id: string;
	name: string;
	url: string;
}

export interface ICartForm {
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	deliveryNote?: string;
	paymentMethodId: string;
}

export interface ICartItem extends IProduct {
	qty: number;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface ILoginResponse {
	token: string;
	user: IUser;
}

export interface IOrder {
	userId?: string;
	deliveryFullName: string;
	deliveryAddress: string;
	deliveryPhone: string;
	deliveryEmail: string;
	paymentMethodId: string;
	items: IOrderItem[];
}

export interface IOrderItem {
	productId: string;
	qty: number;
}

export interface IOrderItemResponse {
	id: string;
	productId: string;
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
	paymentStatus: string;
	orderStatus: string;
	orderDate: Date;

	user?: IUser;
	paymentMethod: IPaymentMethod;
	items: IOrderItemResponse[];
}

export interface IPaymentMethod {
	id: string;
	name: string;
	imageUrl: string;
	description?: string;
}

export interface IProduct {
	id: string;
	name: string;
	price: number;
	description: string;
	unit: string;
	images: string[];
}

export interface IProductWithLink extends IProduct {
	link: string;
}

export interface IRegisterForm {
	email: string;
	password: string;
	confirmPassword: string;
	fullName: string;
	phone: string;
}

export interface IUser {
	id: string;
	email: string;
	fullName: string;
	address: string;
	phone: string;
	userType: string;
}

export interface IUserCreate {
	email: string;
	password: string;
	fullName: string;
	phone: string;
}

export interface IWidget {
	id: string;
	title: string;
	url: string;
}
