import { IProductUnitRequest } from '../interfaces';
import ProductUnit from '../models/productUnit.model';

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
