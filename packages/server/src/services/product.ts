import { Types } from 'mongoose';

import { IProduct } from '../interfaces/IDocuments';
import { IProductCreate } from '../interfaces';
import ProductModel from '../models/product';

const create = async (product: IProductCreate): Promise<IProduct> => {
	const productCreated = await ProductModel.create({
		name: product.name,
		price: product.price,
		unitId: product.unitId,
		description: product.description,
		status: product.status,
		imagesId: product.imagesId,
	});

	return ProductModel.populate(productCreated, [
		{ path: 'unit' },
		{ path: 'images' },
	]);
};

const get = async (filter: any): Promise<IProduct[]> => {
	return ProductModel.find(filter).populate([
		{ path: 'unit' },
		{ path: 'images' },
	]);
};

const getById = async (
	id: string | Types.ObjectId
): Promise<IProduct | null> => {
	return ProductModel.findOne({ _id: id }).populate([
		{ path: 'unit' },
		{ path: 'images' },
	]);
};

const getTrending = async (): Promise<IProduct[]> => {
	return ProductModel.find()
		.limit(8)
		.populate([{ path: 'unit' }, { path: 'images' }]);
};

export default {
	create,
	get,
	getById,
	getTrending,
};
