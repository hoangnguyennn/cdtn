import { ENDPOINT } from '../configs/endpoint';
import { IOrderRequest } from '../interfaces';
import axiosInstance from '../services/instance';

export const order = async (orderRequest: IOrderRequest) => {
	return axiosInstance
		.post(ENDPOINT.orders, orderRequest)
		.then((res) => res.data);
};
