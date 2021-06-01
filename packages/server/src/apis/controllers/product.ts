import { NextFunction, Request, Response } from 'express';
import { IProductCreate, IProductCreateRequest } from '../../interfaces';

import {
	mapProductToResponse,
	mapProductToResponseForAdmin,
} from '../../helpers/mappingResponse';
import { notFound, success } from '../../helpers/commonResponse';
import ImageService from '../../services/image';
import mapQueryToMongoFilter from '../../helpers/mapQueryToMongoFilter';
import ProductService from '../../services/product';
import { UserType } from '../../interfaces/enums';

const create = async (req: Request, res: Response) => {
	const productRequest: IProductCreateRequest = req.body;

	const imagesPromise = productRequest.imagesUrl.map((url: string) => {
		return ImageService.create({ url });
	});

	const images = await Promise.all(imagesPromise);
	const productCreate: IProductCreate = {
		...productRequest,
		description: productRequest.description || '',
		imagesId: images.map((image) => image._id),
	};

	const productCreated = await ProductService.create(productCreate);
	return success(res, mapProductToResponse(productCreated));
};

const get = async (req: Request, res: Response) => {
	const { userType } = res.locals;
	const filter = mapQueryToMongoFilter(req.query);
	const products = await ProductService.get(filter);

	const mappingToResponse =
		userType === UserType.MANAGER
			? mapProductToResponseForAdmin
			: mapProductToResponse;

	return success(res, products.map(mappingToResponse));
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	const product = await ProductService.getById(id);

	if (!product) {
		return notFound(next);
	}

	return success(res, mapProductToResponse(product));
};

const getTrending = async (req: Request, res: Response) => {
	const products = await ProductService.getTrending();
	return success(res, products.map(mapProductToResponse));
};

export default {
	create,
	get,
	getById,
	getTrending,
};
