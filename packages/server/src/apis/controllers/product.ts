import { NextFunction, Request, Response } from 'express';

import { mapProductToResponse } from '../../helpers/mappingResponse';
import { notFound, success } from '../../helpers/commonResponse';
import ImageService from '../../services/image';
import ProductService from '../../services/product';

export const create = async (req: Request, res: Response) => {
	const product = req.body;
	const productCreated = await ProductService.create(product);

	product.productId = productCreated._id;
	await ImageService.create(product);

	return success(res, productCreated);
};

export const getTrending = async (req: Request, res: Response) => {
	const trendingProducts = await ProductService.getTrending();

	return success(res, trendingProducts.map(mapProductToResponse));
};

export const getById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	const product = await ProductService.getById(id);

	if (!product) {
		return notFound(next);
	}

	return success(res, mapProductToResponse(product));
};

export default {
	create,
	getById,
	getTrending,
};
