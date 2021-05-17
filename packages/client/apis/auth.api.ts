import { ENDPOINT } from '../configs/endpoint';
import { IRegisterResponse, IUserRegister } from '../models';
import axiosInstance from '../services/instance';

export const registerApi = async (
	user: IUserRegister
): Promise<IRegisterResponse> => {
	return axiosInstance.post(ENDPOINT.register, user).then((res) => res.data);
};
