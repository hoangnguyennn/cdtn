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
import { removeInvalidFields } from '../utils';
import { productPopulate } from '../helpers/populate';

const create = async (product: IProductCreate): Promise<IProduct> => {
	const productLint = removeInvalidFields({
		name: product.name,
		price: product.price,
		unitId: product.unitId,
		description: product.description,
		status: product.status,
		imagesId: product.imagesId,
		categoryId: product.categoryId,
	});

	const productCreated = await ProductModel.create(productLint);

	return ProductModel.populate(productCreated, productPopulate);
};

const get = async (filter: any = {}): Promise<IProduct[]> => {
	return ProductModel.find(filter).populate(productPopulate);
};

const getById = async (id: string | Types.ObjectId): Promise<IProduct> => {
	const product = await ProductModel.findOne({ _id: id }).populate(
		productPopulate
	);

	if (!product) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return product;
};

const getTrending = async (): Promise<IProduct[]> => {
	return ProductModel.find({ status: ProductStatus.SELLING })
		.limit(8)
		.populate(productPopulate);
};

const updateProduct = async (id: string, product: IProductCreate) => {
	const productLint = removeInvalidFields({
		name: product.name,
		price: product.price,
		unitId: product.unitId,
		description: product.description,
		status: product.status,
		imagesId: product.imagesId,
		categoryId: product.categoryId,
	});

	const productUpdated = await ProductModel.findByIdAndUpdate(
		id,
		{ $set: productLint },
		{ new: true }
	).populate(productPopulate);

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
	).populate(productPopulate);

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
