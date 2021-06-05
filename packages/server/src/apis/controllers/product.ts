import { Request, Response } from 'express';
import { IProductCreate, IProductCreateRequest } from '../../interfaces';

import {
	mapProductToResponse,
	mapProductToResponseForAdmin,
} from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import { UserType } from '../../interfaces/enums';
import ImageService from '../../services/image';
import mapQueryToMongoFilter from '../../helpers/mapQueryToMongoFilter';
import ProductService from '../../services/product';

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

	return success(
		res,
		products.map((value) => mappingToResponse(value))
	);
};

const getById = async (req: Request, res: Response) => {
	const { userType } = res.locals;
	const { id } = req.params;
	const product = await ProductService.getById(id);

	const mappingToResponse =
		userType === UserType.MANAGER
			? mapProductToResponseForAdmin
			: mapProductToResponse;

	return success(res, mappingToResponse(product));
};

const getTrending = async (req: Request, res: Response) => {
	const { userType } = res.locals;
	const products = await ProductService.getTrending();

	const mappingToResponse =
		userType === UserType.MANAGER
			? mapProductToResponseForAdmin
			: mapProductToResponse;

	return success(
		res,
		products.map((value) => mappingToResponse(value))
	);
};

const updateProduct = async (req: Request, res: Response) => {
	const { userType } = res.locals;
	const { id } = req.params;
	const productUpdateRequest: IProductCreateRequest = req.body;

	const imagesPromise = productUpdateRequest.imagesUrl.map((url: string) => {
		return ImageService.create({ url });
	});

	const images = await Promise.all(imagesPromise);
	const productUpdate: IProductCreate = {
		...productUpdateRequest,
		description: productUpdateRequest.description || '',
		imagesId: images.map((image) => image._id),
	};

	const mappingToResponse =
		userType === UserType.MANAGER
			? mapProductToResponseForAdmin
			: mapProductToResponse;

	const productUpdated = await ProductService.updateProduct(id, productUpdate);
	return success(res, mappingToResponse(productUpdated));
};

export default {
	create,
	get,
	getById,
	getTrending,
	updateProduct,
};
