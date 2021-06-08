import { IProduct, IUser, IProductUnit, IOrder } from '.';

export interface IAuthState {
	token: string;
	user: IUser;
}

export interface IOrderState {
	orders: IOrder[];
}

export interface IProductState {
	products: IProduct[];
}

export interface IProductUnitState {
	productUnits: IProductUnit[];
}

export interface IRootState {
	auth: IAuthState;
	order: IOrderState;
	product: IProductState;
	productUnit: IProductUnitState;
}
