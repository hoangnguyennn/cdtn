import {
	ICartItem,
	ICategoryWithProductLength,
	IOrderResponse,
	IPaymentMethod,
	IProduct,
	IUser,
} from './index';

export interface IAppState {
	limitOfToast: number;
}

export interface IAuthState {
	token: string;
	user: IUser;
}

export interface ICartState {
	cartItems: ICartItem[];
}

export interface ICategoryState {
	categories: ICategoryWithProductLength[];
}

export interface IOrderState {
	orders: IOrderResponse[];
}

export interface IPaymentMethodState {
	paymentMethods: IPaymentMethod[];
}

export interface IProductState {
	products: IProduct[];
	trendingProducts: IProduct[];
	product: IProduct;
}

export interface IRootState {
	app: IAppState;
	auth: IAuthState;
	cart: ICartState;
	category: ICategoryState;
	order: IOrderState;
	paymentMethod: IPaymentMethodState;
	product: IProductState;
}
