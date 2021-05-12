import { Request, Response } from 'express';

import { commonResponse } from '../../helpers/commonResponse';
import ProductService from '../../services/product.service';

export const getAllProduct = async (
	req: Request,
	res: Response
): Promise<void> => {
	const serviceResponse = await ProductService.getAll();
	commonResponse(res, serviceResponse);
};

export const getProductById = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	const serviceResponse = await ProductService.getById(id);
	commonResponse(res, serviceResponse);
};

export default {
	getAllProduct,
	getProductById,
};
