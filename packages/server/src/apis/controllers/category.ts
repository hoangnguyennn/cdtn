import { Request, Response } from 'express';

import { mapCategoryToResponse } from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import CategoryService from '../../services/category';

const create = async (req: Request, res: Response) => {
	const categoryRequest = req.body;
	const categoryCreated = await CategoryService.create(categoryRequest);
	return success(res, mapCategoryToResponse(categoryCreated));
};

const get = async (req: Request, res: Response) => {
	const categories = await CategoryService.get();
	return success(res, categories.map(mapCategoryToResponse));
};

export default {
	create,
	get,
};
