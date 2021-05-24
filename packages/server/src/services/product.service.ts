import { IProductRequest } from '../interfaces';
import { IProduct } from '../interfaces/IDocuments';
import Product from '../models/product.model';

export const createProductService = (
	productRequest: IProductRequest
): Promise<IProduct> => {
	return Product.create({
		name: productRequest.name,
		price: productRequest.price,
		unit: productRequest.unit,
		description: productRequest.description,
		status: productRequest.status,
	});
};

export const getTrendingProductsService = async (): Promise<IProduct[]> => {
	return Product.find()
		.limit(8)
		.populate([
			{ path: 'unit', select: '-_id name' },
			{ path: 'images', select: '-_id url' },
		]);
};

export const getProductByIdService = async (
	id: string
): Promise<IProduct | null> => {
	return Product.findOne({ _id: id }).populate([
		{ path: 'unit', select: '-_id name' },
		{ path: 'images', select: '-_id url' },
	]);
};

export default {
	createProductService,
	getTrendingProductsService,
	getProductByIdService,
};
