export const removeInvalidFields = function <T>(obj: T): T {
	const result = Object.entries(obj).reduce((result: any, [key, value]) => {
		if (value !== undefined && value !== null) {
			result[key] = value;
		}

		return result;
	}, {});

	return result;
};
