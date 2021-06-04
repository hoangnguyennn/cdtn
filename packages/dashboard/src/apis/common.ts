import { ENDPOINT } from '../configs/endpoint';
import {
	IProductCreate,
	IProductUnit,
	IProductUnitCreate,
	IUser,
} from '../interfaces';
import axiosInstance from '../services/instance';

export const createProduct = async (product: IProductCreate) => {
	return axiosInstance.post(ENDPOINT.products, product).then((res) => res.data);
};

export const createProductUnit = async (productUnit: IProductUnitCreate) => {
	return axiosInstance
		.post(ENDPOINT.productUnits, productUnit)
		.then((res) => res.data);
};

export const fetchProducts = async () => {
	return axiosInstance.get(ENDPOINT.products).then((res) => res.data);
};

export const fetchProductUnits = async () => {
	return axiosInstance.get(ENDPOINT.productUnits).then((res) => res.data);
};

export const fetchProductUnitById = async (id: string) => {
	return axiosInstance
		.get(`${ENDPOINT.productUnits}/${id}`)
		.then((res) => res.data);
};

export const login = async (userLogin: any) => {
	return axiosInstance.post(ENDPOINT.login, userLogin).then((res) => res.data);
};

export const loginByToken = async (): Promise<IUser> => {
	return axiosInstance.post(ENDPOINT.me).then((res) => res.data);
};

export const updateProductUnit = async (id: string, unit: IProductUnit) => {
	return axiosInstance
		.post(`${ENDPOINT.productUnits}/${id}`, unit)
		.then((res) => res.data);
};
