import { IProduct, IUser, IProductUnit, IOrder, ICategory } from '.';

export interface IAuthState {
	token: string;
	user: IUser;
}

export interface ICategoryState {
	categories: ICategory[];
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
	category: ICategoryState;
	order: IOrderState;
	product: IProductState;
	productUnit: IProductUnitState;
}
