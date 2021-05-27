export const toCurrency = (num: number) => {
	return num.toLocaleString('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});
};

const formatters = {
	toCurrency,
};

export default formatters;
