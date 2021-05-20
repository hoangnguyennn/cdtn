import { Request, Response } from 'express';

import { success } from '../../helpers/commonResponse';
import { createNewProductUnitService } from '../../services/productUnit.service';

export const createNewProductUnitController = async (
	req: Request,
	res: Response
) => {
	const productUnit = req.body;
	const productUnitCreated = await createNewProductUnitService(productUnit);

	return success(res, productUnitCreated);
};

export default {
	createNewProductUnitController,
};
