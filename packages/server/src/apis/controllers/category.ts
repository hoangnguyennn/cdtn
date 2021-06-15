import { Request, Response } from 'express';

import {
	mapCategoryToResponse,
	mapCategoryWithProductListToResponse,
} from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import CategoryService from '../../services/category';
import ProductService from '../../services/product';
import { ICategory } from '../../interfaces/IDocuments';
import { ICategoryWithLength } from '../../interfaces';

const create = async (req: Request, res: Response) => {
	const categoryRequest = req.body;
	const categoryCreated = await CategoryService.create(categoryRequest);
	return success(res, mapCategoryToResponse(categoryCreated));
};

const get = async (req: Request, res: Response) => {
	const withProductLength = req.query['with-product-length'];
	const categories: ICategory[] = await CategoryService.get();

	if (withProductLength === 'true') {
		const productsPromises = categories.map((category) =>
			ProductService.get({ categoryId: category.id })
		);

		const productsList = await Promise.all(productsPromises);
		const categoriesWithProductsLength: ICategoryWithLength[] = categories.map(
			(category, idx) => {
				return Object.assign<ICategory, { productsLength: number }>(
					Object.create(category),
					{
						productsLength: productsList[idx].length,
					}
				);
			}
		);

		return success(
			res,
			categoriesWithProductsLength.map((category) =>
				mapCategoryWithProductListToResponse(category)
			)
		);
	}

	return success(res, categories.map(mapCategoryToResponse));
};

export default {
	create,
	get,
};
