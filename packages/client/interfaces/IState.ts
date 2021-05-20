import { IProductResponse, IUserResponse } from './index';

export interface IAuthState {
	token: string;
	user: IUserResponse;
	message: string;
	hasError: boolean;
}

export interface IProductState {
	trendingProducts: IProductResponse[];
}

export interface IRootState {
	auth: IAuthState;
	product: IProductState;
}
