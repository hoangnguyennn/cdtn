import { NextFunction, Request, Response } from 'express';
import { notFound, success } from '../../helpers/commonResponse';

import ProductImage from '../../services/productImage.service';
import Product from '../../services/product.service';
import { mapProductToResponse } from '../../helpers/mappingResponse';

export const createNewProductController = async (
	req: Request,
	res: Response
) => {
	const product = req.body;
	const productCreated = await Product.createProductService(product);

	product.productId = productCreated._id;
	await ProductImage.createProductImageService(product);

	return success(res, productCreated);
};

export const getTrendingProductsController = async (
	req: Request,
	res: Response
) => {
	const trendingProducts = await Product.getTrendingProductsService();

	return success(res, trendingProducts.map(mapProductToResponse));
};

export const getProductByIdController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	const product = await Product.getProductByIdService(id);

	if (!product) {
		return notFound(next);
	}

	return success(res, mapProductToResponse(product));
};

export default {
	createNewProductController,
	getTrendingProductsController,
	getProductByIdController,
};
