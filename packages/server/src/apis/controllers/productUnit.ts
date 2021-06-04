import { Request, Response } from 'express';
import { IProductUnitCreate } from '../../interfaces';
import { mapProductUnitToResponse } from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';

import ProductUnitService from '../../services/productUnit';

const create = async (req: Request, res: Response) => {
	const productUnitCreate: IProductUnitCreate = req.body;
	const productUnitCreated = await ProductUnitService.create(productUnitCreate);
	return success(res, productUnitCreated);
};

const get = async (req: Request, res: Response) => {
	const productUnits = await ProductUnitService.get();
	return success(res, productUnits.map(mapProductUnitToResponse));
};

const getById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const productUnit = await ProductUnitService.getById(id);
	return success(res, mapProductUnitToResponse(productUnit));
};

const update = async (req: Request, res: Response) => {
	const { id } = req.params;
	const productUnitUpdate = req.body;
	const productUnitUpdated = await ProductUnitService.update(
		id,
		productUnitUpdate
	);

	return success(res, mapProductUnitToResponse(productUnitUpdated));
};

export default {
	create,
	get,
	getById,
	update,
};
