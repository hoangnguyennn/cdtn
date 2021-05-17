import { ENDPOINT } from '../configs/endpoint';
import {
	ILogin,
	ILoginResponse,
	IRegisterResponse,
	IUserRegister,
} from '../models';
import axiosInstance from '../services/instance';

export const registerApi = async (
	user: IUserRegister
): Promise<IRegisterResponse> => {
	return axiosInstance.post(ENDPOINT.register, user).then((res) => res.data);
};

export const loginApi = async (userLogin: ILogin): Promise<ILoginResponse> => {
	return axiosInstance.post(ENDPOINT.login, userLogin).then((res) => res.data);
};
