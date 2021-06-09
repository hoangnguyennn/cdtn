import {
	COMMON_MESSAGE,
	HttpError,
	HttpStatusCode,
} from '../helpers/commonResponse';
import { IProductUnit } from '../interfaces/IDocuments';
import { IProductUnitCreate, IProductUnitUpdate } from '../interfaces';
import ProductUnitModel from '../models/productUnit';
import { removeInvalidFields } from '../utils';

const create = async (
	productUnit: IProductUnitCreate
): Promise<IProductUnit> => {
	const productUnitLint = removeInvalidFields({
		name: productUnit.name,
	});
	return ProductUnitModel.create(productUnitLint);
};

const get = async (): Promise<IProductUnit[]> => {
	return ProductUnitModel.find();
};

const getById = async (id: string): Promise<IProductUnit> => {
	const productUnit = await ProductUnitModel.findOne({ _id: id });

	if (!productUnit) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return productUnit;
};

const update = async (
	id: string,
	productUnit: IProductUnitUpdate
): Promise<IProductUnit> => {
	const productUnitLint = removeInvalidFields({
		name: productUnit.name,
	});

	const productUnitUpdated = await ProductUnitModel.findByIdAndUpdate(
		id,
		{ $set: productUnitLint },
		{ new: true }
	);

	if (!productUnitUpdated) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return productUnitUpdated;
};

export default {
	create,
	get,
	getById,
	update,
};
