import { IProductUnit } from '../interfaces/IDocuments';
import { IProductUnitCreate } from '../interfaces';
import ProductUnitModel from '../models/productUnit';

const create = async (
	productUnit: IProductUnitCreate
): Promise<IProductUnit> => {
	return ProductUnitModel.create({
		name: productUnit.name,
	});
};

const get = async (): Promise<IProductUnit[]> => {
	return ProductUnitModel.find();
};

export default {
	create,
	get,
};
