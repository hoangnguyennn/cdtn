import {
	ICartItem,
	IPaymentMethodResponse,
	IProductResponse,
	IUserResponse,
} from './index';

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
	auth: IAuthState;
	cart: ICartState;
	product: IProductState;
	paymentMethod: IPaymentMethodState;
}
