import {
	ICartItem,
	IPaymentMethodResponse,
	IProductResponse,
	IUserResponse,
} from './index';

export interface IAppState {
	limitOfToast: number;
}

export interface IAuthState {
	token: string;
	user: IUserResponse;
	message: string;
	hasError: boolean;
}

export interface ICartState {
	cart: ICartItem[];
}

export interface IPaymentMethodState {
	paymentMethods: IPaymentMethodResponse[];
}

export interface IProductState {
	trendingProducts: IProductResponse[];
	product: IProductResponse;
}

export interface IRootState {
	app: IAppState;
	auth: IAuthState;
	cart: ICartState;
	paymentMethod: IPaymentMethodState;
	product: IProductState;
}
