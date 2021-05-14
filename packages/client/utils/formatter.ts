export const toCurrency = (num: number) => {
	return num.toLocaleString('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});
};

export default {
	toCurrency,
};
