import { ENDPOINT } from '../configs/endpoint';
import { IProduct } from '../interfaces';
import axiosInstance from '../services/instance';

export const fetchProducts = async (query: any): Promise<IProduct[]> => {
	return axiosInstance
		.get(ENDPOINT.products, { params: query })
		.then((res) => res.data);
};

export const fetchTrendingProducts = async (): Promise<IProduct[]> => {
	return axiosInstance.get(ENDPOINT.trendingProducts).then((res) => res.data);
};

export const fetchProductsByCategorySlug = async (slug: string) => {
	return axiosInstance
		.get(`${ENDPOINT.categories}/slug/${slug}${ENDPOINT.products}`)
		.then((res) => res.data);
};

export const fetchProductById = async (id: string): Promise<IProduct> => {
	return axiosInstance
		.get(`${ENDPOINT.products}/${id}`)
		.then((res) => res.data);
};
