import { ENDPOINT } from '../configs/endpoint';
import { IOrder, IOrderResponse } from '../interfaces/index';
import axiosInstance from '../services/instance';

export const order = async (order: IOrder): Promise<IOrderResponse> => {
	return axiosInstance.post(ENDPOINT.orders, order).then((res) => res.data);
};

export const get = async (token: string): Promise<IOrderResponse[]> => {
	return axiosInstance
		.get(ENDPOINT.orders, {
			headers: { Authorization: token },
		})
		.then((res) => res.data);
};
