import { ENDPOINT } from '../configs/endpoint';
import {
	ILogin,
	ILoginResponse,
	IUserRegister,
	IUserResponse,
} from '../interfaces';
import axiosInstance from '../services/instance';

export const registerAccount = async (
	userRegister: IUserRegister
): Promise<IUserResponse> => {
	return axiosInstance
		.post(ENDPOINT.register, userRegister)
		.then((res) => res.data);
};

export const login = async (userLogin: ILogin): Promise<ILoginResponse> => {
	return axiosInstance.post(ENDPOINT.login, userLogin).then((res) => res.data);
};

export const loginByToken = async (token: string): Promise<IUserResponse> => {
	return axiosInstance
		.post(ENDPOINT.me, null, {
			headers: { Authorization: token },
		})
		.then((res) => res.data);
};
