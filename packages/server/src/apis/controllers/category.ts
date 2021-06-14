import { Request, Response } from 'express';

import { mappingCategoryToResponse } from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import CategoryService from '../../services/category';

const create = async (req: Request, res: Response) => {
	const categoryRequest = req.body;
	const categoryCreated = await CategoryService.create(categoryRequest);
	return success(res, mappingCategoryToResponse(categoryCreated));
};

export default { create };
