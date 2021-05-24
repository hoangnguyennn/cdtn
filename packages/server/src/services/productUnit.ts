import { IProductUnitRequest } from '../interfaces';
import ProductUnit from '../models/productUnit';

export const createNewProductUnitService = (
	productUnit: IProductUnitRequest
) => {
	return ProductUnit.create({
		name: productUnit.name,
	});
};

export default {
	createNewProductUnitService,
};
