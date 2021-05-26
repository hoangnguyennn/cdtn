import { IProduct } from '.';

export interface IProductState {
	products: IProduct[];
}

export interface IRootState {
	product: IProductState;
}
