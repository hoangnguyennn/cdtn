import { ENDPOINT } from '../configs/endpoint';
import { IProductCreate, IUser } from '../interfaces';
import axiosInstance from '../services/instance';

export const createProduct = async (product: IProductCreate) => {
	return axiosInstance.post(ENDPOINT.products, product).then((res) => res.data);
};

export const fetchProducts = async () => {
	return axiosInstance.get(ENDPOINT.products).then((res) => res.data);
};

export const fetchProductUnits = async () => {
	return axiosInstance.get(ENDPOINT.productUnits).then((res) => res.data);
};

export const login = async (userLogin: any) => {
	return axiosInstance.post(ENDPOINT.login, userLogin).then((res) => res.data);
};

export const loginByToken = async (): Promise<IUser> => {
	return axiosInstance.post(ENDPOINT.me).then((res) => res.data);
};
