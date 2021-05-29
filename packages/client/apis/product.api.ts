import { ENDPOINT } from '../configs/endpoint';
import { IProduct } from '../interfaces/index';
import axiosInstance from '../services/instance';

export const fetchTrendingProducts = async (): Promise<IProduct[]> => {
	return axiosInstance.get(ENDPOINT.trendingProducts).then((res) => res.data);
};

export const fetchProductById = async (id: string): Promise<IProduct> => {
	return axiosInstance
		.get(`${ENDPOINT.products}/${id}`)
		.then((res) => res.data);
};
