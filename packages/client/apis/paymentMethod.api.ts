import { ENDPOINT } from '../configs/endpoint';
import { IPaymentMethodResponse } from '../interfaces';
import axiosInstance from '../services/instance';

export const fetchPaymentMethods =
	async (): Promise<IPaymentMethodResponse> => {
		return axiosInstance.get(ENDPOINT.paymentMethods).then((res) => res.data);
	};
