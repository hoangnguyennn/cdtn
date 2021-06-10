export const removeInvalidFields = function <T>(obj: T): T {
	const result = Object.entries(obj).reduce((result: any, [key, value]) => {
		if (value !== undefined && value !== null && value !== '') {
			result[key] = value;
		}

		return result;
	}, {});

	return result;
};

export const startOfDay = (date?: Date) => {
	if (date) {
		const years = date.getFullYear();
		const months = date.getMonth();
		const dates = date.getDate();

		return new Date(years, months, dates);
	}

	const newDate = new Date();
	const years = newDate.getFullYear();
	const months = newDate.getMonth();
	const dates = newDate.getDate();

	return new Date(years, months, dates);
};

export const endOfDay = (date?: Date) => {
	const newDate = new Date();
	let years = newDate.getFullYear();
	let months = newDate.getMonth();
	let dates = newDate.getDate();

	if (date) {
		years = date.getFullYear();
		months = date.getMonth();
		dates = date.getDate();
	}

	return new Date(years, months, dates + 1);
};

export const convertNotUnicode = (value: string) => value;
