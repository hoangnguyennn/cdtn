import { IProductUnitRequest } from '../interfaces';
import ProductUnitModel from '../models/productUnit';

export const create = (productUnit: IProductUnitRequest) => {
	return ProductUnitModel.create({
		name: productUnit.name,
	});
};

export default {
	create,
};
