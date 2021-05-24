import { Request, Response } from 'express';

import { success } from '../../helpers/commonResponse';
import ProductUnitService from '../../services/productUnit';

export const create = async (req: Request, res: Response) => {
	const productUnit = req.body;

	const productUnitCreated = await ProductUnitService.create(productUnit);
	return success(res, productUnitCreated);
};

export default {
	create,
};
