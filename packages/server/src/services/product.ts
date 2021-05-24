import { IProductRequest } from '../interfaces';
import { IProduct } from '../interfaces/IDocuments';
import Product from '../models/product';

export const create = (product: IProductRequest): Promise<IProduct> => {
	return Product.create({
		name: product.name,
		price: product.price,
		unit: product.unit,
		description: product.description,
		status: product.status,
	});
};

export const getTrending = async (): Promise<IProduct[]> => {
	return Product.find()
		.limit(8)
		.populate([
			{ path: 'unit', select: '-_id name' },
			{ path: 'images', select: '-_id url' },
		]);
};

export const getById = async (id: string): Promise<IProduct | null> => {
	return Product.findOne({ _id: id }).populate([
		{ path: 'unit', select: '-_id name' },
		{ path: 'images', select: '-_id url' },
	]);
};

export default {
	create,
	getById,
	getTrending,
};
