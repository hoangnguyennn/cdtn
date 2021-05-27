import { ICartItem } from '../interfaces';

const isProductInCart = (product: any): product is ICartItem => {
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

export default isProductInCart;
