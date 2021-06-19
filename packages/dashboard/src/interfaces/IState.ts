import { IProduct, IUser, IProductUnit, IOrder, ICategory } from '.';

export interface IAppState {
	isLoading: boolean;
}

export interface IAuthState {
	token: string;
	user: IUser;
}

export interface ICategoryState {
	categories: ICategory[];
}

export interface IOrderState {
	orders: IOrder[];
	ordersUnProcessed: IOrder[];
}

export interface IProductState {
	products: IProduct[];
}

export interface IProductUnitState {
	productUnits: IProductUnit[];
}

export interface IStatisticsState {
	revenueOfTheDay: number;
	revenueOfPreviousDay: number;
	numberOfOrders: number;
	numberOfOrdersOfPreviousDay: number;
}

export interface IRootState {
	app: IAppState;
	auth: IAuthState;
	category: ICategoryState;
	order: IOrderState;
	product: IProductState;
	productUnit: IProductUnitState;
	statistics: IStatisticsState;
}
