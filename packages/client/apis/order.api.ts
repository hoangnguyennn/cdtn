import { ENDPOINT } from '../configs/endpoint';
import { IOrder, IOrderResponse } from '../interfaces/new_index';
import axiosInstance from '../services/instance';

export const order = async (order: IOrder): Promise<IOrderResponse> => {
	return axiosInstance.post(ENDPOINT.orders, order).then((res) => res.data);
};
