import { normalize } from '../utils';

/* eslint-disable indent */
const mapping = (query: any): Record<string, any> => {
	return Object.entries(query)
		.map(([key, value]: [string, any]) => {
			let tmp;
			switch (key) {
				case 'price':
					tmp = value.split('-');
					return {
						price: {
							$lte: Number(tmp[1]) || 0,
							$gte: Number(tmp[0]) || 0,
						},
					};
				case 'name':
					tmp = normalize(value);
					return {
						nameNonUnicode: { $regex: new RegExp(`${tmp}`, 'i') },
					};
				default:
					return null;
			}
		})
		.reduce((result: any, item: any) => Object.assign(result, item), {});
};

export default mapping;
