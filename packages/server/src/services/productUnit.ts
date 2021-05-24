import { IProductUnitRequest } from '../interfaces';
import ProductUnit from '../models/productUnit';

export const create = (productUnit: IProductUnitRequest) => {
	return ProductUnit.create({
		name: productUnit.name,
	});
};

export default {
	create,
};
