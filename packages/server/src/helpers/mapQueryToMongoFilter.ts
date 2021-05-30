/* eslint-disable indent */
const mapping = (query: any): Record<string, any> => {
	return Object.entries(query)
		.map(([key, value]: [string, any]) => {
			let tmpForHandle;
			switch (key) {
				case 'price':
					tmpForHandle = value.split('-');
					return {
						price: removeUndefinedFields({
							$lte: tmpForHandle[1],
							$gte: tmpForHandle[0],
						}),
					};
				default:
					return null;
			}
		})
		.reduce((result: any, item: any) => Object.assign(result, item), {});
};

export const removeUndefinedFields = (object: any) => {
	return Object.entries(object).reduce((result: any, [key, value]) => {
		if (value) {
			result[key] = value;
		}

		return result;
	}, {});
};

export default mapping;
