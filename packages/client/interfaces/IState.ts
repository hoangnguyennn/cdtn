import { ICartItem, IPaymentMethod, IProduct, IUser } from './index';

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

export interface IPaymentMethodState {
	paymentMethods: IPaymentMethod[];
}

export interface IProductState {
	trendingProducts: IProduct[];
	product: IProduct;
}

export interface IRootState {
	app: IAppState;
	auth: IAuthState;
	cart: ICartState;
	paymentMethod: IPaymentMethodState;
	product: IProductState;
}
