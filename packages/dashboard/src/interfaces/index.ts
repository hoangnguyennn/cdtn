import { ProductStatuses } from './enum';

export interface IProduct {
	id: string;
	name: string;
	price: number;
	unit: string;
	description?: string;
	status: ProductStatuses;
	images: string[];
}
