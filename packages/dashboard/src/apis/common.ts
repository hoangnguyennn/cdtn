import { ENDPOINT } from '../configs/endpoint';
import axiosInstance from '../services/instance';

export const fetchProducts = async () => {
	return axiosInstance.get(ENDPOINT.products).then((res) => res.data);
};
