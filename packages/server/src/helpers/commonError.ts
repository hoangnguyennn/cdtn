import getDuplicateFieldMongo from './getDuplicateFieldMongo';
import mappingMongoFieldToString from './mappingMongoFieldToString';

// eslint-disable-next-line @typescript-eslint/ban-types
export const MONGO_ERROR: { [key: string]: Function } = {
	'11000': (message: string) => {
		return `${
			mappingMongoFieldToString[`${getDuplicateFieldMongo(message)}`]
		} đã tồn tại`;
	},
};
