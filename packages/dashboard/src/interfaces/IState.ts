import { IProduct, IUser, IProductUnit } from '.';

export interface IAuthState {
	token: string;
	user: IUser;
}

export interface IProductState {
	products: IProduct[];
}

export interface IProductUnitState {
	productUnits: IProductUnit[];
}

export interface IRootState {
	auth: IAuthState;
	product: IProductState;
	productUnit: IProductUnitState;
}
