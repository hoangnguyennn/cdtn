import { ENDPOINT } from '../configs/endpoint';
import { IUser } from '../interfaces';
import axiosInstance from '../services/instance';

export const fetchProducts = async () => {
	return axiosInstance.get(ENDPOINT.products).then((res) => res.data);
};

export const login = async (userLogin: any) => {
	return axiosInstance.post(ENDPOINT.login, userLogin).then((res) => res.data);
};

export const loginByToken = async (token: string): Promise<IUser> => {
	return axiosInstance
		.post(ENDPOINT.me, null, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((res) => res.data);
};
