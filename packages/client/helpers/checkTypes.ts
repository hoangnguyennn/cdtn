import { ICartItem } from '../interfaces';
import { variant } from '../interfaces/types';

export const isProductInCart = (product: any): product is ICartItem => {
	return (
		'id' in product &&
		'name' in product &&
		'price' in product &&
		'description' in product &&
		'unit' in product &&
		'images' in product &&
		'qty' in product
	);
};

export const isVariant = (key: string): boolean => {
	return variant.includes(key);
};
