import { Request, Response } from 'express';
import { success } from '../../helpers/commonResponse';
import { IProductUnitCreate } from '../../interfaces';

import ProductUnitService from '../../services/productUnit';

const create = async (req: Request, res: Response) => {
	const productUnitCreate: IProductUnitCreate = req.body;
	const productUnitCreated = await ProductUnitService.create(productUnitCreate);
	return success(res, productUnitCreated);
};

const get = async (req: Request, res: Response) => {
	const productUnits = await ProductUnitService.get();
	return success(res, productUnits);
};

export default {
	create,
	get,
};
