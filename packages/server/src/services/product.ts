import { IProductRequest } from '../interfaces';
import { IProduct } from '../interfaces/IDocuments';
import ProductModel from '../models/product';

export const create = (product: IProductRequest): Promise<IProduct> => {
	return ProductModel.create({
		name: product.name,
		price: product.price,
		unitId: product.unitId,
		description: product.description,
		status: product.status,
		imagesId: product.imagesId,
	});
};

export const getTrending = async (): Promise<IProduct[]> => {
	return ProductModel.find()
		.limit(8)
		.populate([
			{ path: 'unit', select: '-_id name' },
			{ path: 'images', select: '-_id url' },
		]);
};

export const getById = async (id: string): Promise<IProduct | null> => {
	return ProductModel.findOne({ _id: id }).populate([
		{ path: 'unit', select: '-_id name' },
		{ path: 'images', select: '-_id url' },
	]);
};

export const get = async (): Promise<IProduct[]> => {
	return ProductModel.find().populate([
		{ path: 'unit', select: '-_id name' },
		{ path: 'images', select: '-_id url' },
	]);
};

export default {
	create,
	getById,
	getTrending,
	get,
};
