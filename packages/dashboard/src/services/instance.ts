import axios from 'axios';
import { BASE_URL } from '../configs/endpoint';

const instance = axios.create({
	baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('access-token');
	config.headers = { Authorization: `Bearer ${token}` };
	return config;
});

instance.interceptors.response.use(
	(response) => response,
	(error: any) => {
		if (error.isAxiosError) {
			throw error.response?.data;
		}

		throw error;
	}
);

export default instance;
