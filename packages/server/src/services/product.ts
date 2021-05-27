import { IProduct } from '../interfaces/IDocuments';
import { IProductCreate } from '../interfaces';
import ProductModel from '../models/product';

const create = async (product: IProductCreate): Promise<IProduct> => {
	return ProductModel.create({
		name: product.name,
		price: product.price,
		unitId: product.unitId,
		description: product.description,
		status: product.status,
		imagesId: product.imagesId,
	});
};

const get = async (): Promise<IProduct[]> => {
	return ProductModel.find().populate([{ path: 'unit' }, { path: 'images' }]);
};

const getById = async (id: string): Promise<IProduct | null> => {
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
