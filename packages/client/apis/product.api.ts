import { ENDPOINT } from '../configs/endpoint';
import { IProductResponse } from '../interfaces';
import axiosInstance from '../services/instance';

export const fetchTrendingProducts = (): Promise<IProductResponse[]> => {
	return axiosInstance.get(ENDPOINT.trendingProducts).then((res) => res.data);
};

export const fetchProductById = (id: string): Promise<IProductResponse> => {
	return axiosInstance
		.get(`${ENDPOINT.products}/${id}`)
		.then((res) => res.data);
};
