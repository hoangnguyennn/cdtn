import axios from 'axios';
import { BASE_URL } from '../configs/endpoint';

axios.interceptors.request.use((config) => {
	return config;
});

axios.interceptors.response.use((config) => {
	return config;
});

export default axios.create({
	baseURL: BASE_URL,
});
