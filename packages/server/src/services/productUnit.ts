import { IProductUnit } from '../interfaces/IDocuments';
import { IProductUnitCreate, IProductUnitUpdate } from '../interfaces';
import ProductUnitModel from '../models/productUnit';
import { HttpError, HttpStatusCode } from '../helpers/commonResponse';
import { NOT_FOUND } from '../constants/commonResponseMessages';

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

const getById = async (id: string): Promise<IProductUnit> => {
	const productUnit = await ProductUnitModel.findOne({ _id: id });

	if (!productUnit) {
		throw new HttpError(NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return productUnit;
};

const update = async (
	id: string,
	productUnit: IProductUnitUpdate
): Promise<IProductUnit> => {
	const productUnitUpdated = await ProductUnitModel.findByIdAndUpdate(
		id,
		{ $set: { name: productUnit.name } },
		{ new: true }
	);

	if (!productUnitUpdated) {
		throw new HttpError(NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return productUnitUpdated;
};

export default {
	create,
	get,
	getById,
	update,
};
