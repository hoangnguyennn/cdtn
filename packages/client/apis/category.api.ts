import { ENDPOINT } from '../configs/endpoint';
import { ICategoryWithProductLength } from '../interfaces';
import axiosInstance from '../services/instance';

export const fetchCategories =
	async (): Promise<ICategoryWithProductLength> => {
		return axiosInstance
			.get(ENDPOINT.categories, { params: { 'with-product-length': 'true' } })
			.then((res) => res.data);
	};
