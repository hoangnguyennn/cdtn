import { Types } from 'mongoose';

import {
	COMMON_MESSAGE,
	HttpError,
	HttpStatusCode,
} from '../helpers/commonResponse';
import { IProduct } from '../interfaces/IDocuments';
import { IProductCreate } from '../interfaces';
import ProductModel from '../models/product';
import { ProductStatus } from '../interfaces/enums';

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

const get = async (filter: any = {}): Promise<IProduct[]> => {
	return ProductModel.find(filter).populate([
		{ path: 'unit' },
		{ path: 'images' },
	]);
};

const getById = async (id: string | Types.ObjectId): Promise<IProduct> => {
	const product = await ProductModel.findOne({ _id: id }).populate([
		{ path: 'unit' },
		{ path: 'images' },
	]);

	if (!product) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return product;
};

const getTrending = async (): Promise<IProduct[]> => {
	return ProductModel.find({ status: ProductStatus.SELLING })
		.limit(8)
		.populate([{ path: 'unit' }, { path: 'images' }]);
};

const updateProduct = async (id: string, product: IProductCreate) => {
	const productUpdated = await ProductModel.findByIdAndUpdate(
		id,
		{
			$set: {
				name: product.name,
				price: product.price,
				unitId: product.unitId,
				description: product.description,
				status: product.status,
				imagesId: product.imagesId,
			},
		},
		{ new: true }
	).populate([{ path: 'unit' }, { path: 'images' }]);

	if (!productUpdated) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return productUpdated;
};

const updateProductStatus = async (
	id: string,
	newStatus: ProductStatus
): Promise<IProduct> => {
	const productUpdated = await ProductModel.findByIdAndUpdate(
		id,
		{ $set: { status: newStatus } },
		{ new: true }
	).populate([{ path: 'unit' }, { path: 'images' }]);

	if (!productUpdated) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return productUpdated;
};

export default {
	create,
	get,
	getById,
	getTrending,
	updateProduct,
	updateProductStatus,
};
