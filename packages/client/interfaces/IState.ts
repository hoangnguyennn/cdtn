import { ICartItem, IProductResponse, IUserResponse } from './index';

export interface IAuthState {
	token: string;
	user: IUserResponse;
	message: string;
	hasError: boolean;
}

export interface ICartState {
	cart: ICartItem[];
}

export interface IProductState {
	trendingProducts: IProductResponse[];
	product: IProductResponse;
}

export interface IRootState {
	auth: IAuthState;
	cart: ICartState;
	product: IProductState;
}
