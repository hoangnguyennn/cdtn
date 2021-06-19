import { ENDPOINT } from '../configs/endpoint';
import {
	ICategoryCreate,
	IProductCreate,
	IProductUnitCreate,
	IProductUpdate,
	IUser,
} from '../interfaces';
import { OrderStatus, ProductStatus } from '../interfaces/enum';
import axiosInstance from '../services/instance';

export const createCategory = async (category: ICategoryCreate) => {
	return axiosInstance
		.post(ENDPOINT.categories, category)
		.then((res) => res.data);
};

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

export const fetchOrdersUnProcessed = async () => {
	return axiosInstance
		.get(ENDPOINT.orders, {
			params: {
				orderStatus: [
					OrderStatus.ORDERED,
					OrderStatus.VERIFIED,
					OrderStatus.DELIVERING,
				],
			},
		})
		.then((res) => res.data);
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

export const fetchStatistics = async () => {
	return axiosInstance.get(ENDPOINT.statistics).then((res) => res.data);
};

export const login = async (userLogin: any) => {
	return axiosInstance.post(ENDPOINT.login, userLogin).then((res) => res.data);
};

export const loginByToken = async (): Promise<IUser> => {
	return axiosInstance.post(ENDPOINT.me).then((res) => res.data);
};

export const updateOrderStatus = async (id: string, status: OrderStatus) => {
	return axiosInstance
		.post(`${ENDPOINT.orders}/${id}/update-status`, { status })
		.then((res) => res.data);
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

export const uploadImage = async (image: File) => {
	const formData = new FormData();
	formData.append('file', image);

	return axiosInstance.post(ENDPOINT.upload, formData).then((res) => res.data);
};
