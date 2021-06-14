import { ENDPOINT } from '../configs/endpoint';
import {
	IProductCreate,
	IProductUnitCreate,
	IProductUpdate,
	IUser,
} from '../interfaces';
import { ProductStatus } from '../interfaces/enum';
import axiosInstance from '../services/instance';

export const createProduct = async (product: IProductCreate) => {
	return axiosInstance.post(ENDPOINT.products, product).then((res) => res.data);
};

export const createProductUnit = async (productUnit: IProductUnitCreate) => {
	return axiosInstance
		.post(ENDPOINT.productUnits, productUnit)
		.then((res) => res.data);
};

export const fetchCategories = async () => {
	return axiosInstance.get(ENDPOINT.categories).then((res) => res.data);
};

export const fetchOrders = async () => {
	return axiosInstance.get(ENDPOINT.orders).then((res) => res.data);
};

export const fetchProducts = async () => {
	return axiosInstance.get(ENDPOINT.products).then((res) => res.data);
};

export const fetchProductById = async (id: string) => {
	return axiosInstance
		.get(`${ENDPOINT.products}/${id}`)
		.then((res) => res.data);
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

export const updateProduct = async (id: string, product: IProductUpdate) => {
	return axiosInstance
		.patch(`${ENDPOINT.products}/${id}`, product)
		.then((res) => res.data);
};

export const updateProductStatus = async (
	id: string,
	newStatus: ProductStatus
) => {
	return axiosInstance
		.post(`${ENDPOINT.products}/${id}/update-status`, { status: newStatus })
		.then((res) => res.data);
};

export const updateProductUnit = async (
	id: string,
	unit: IProductUnitCreate
) => {
	return axiosInstance
		.patch(`${ENDPOINT.productUnits}/${id}`, unit)
		.then((res) => res.data);
};
