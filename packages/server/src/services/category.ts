import { ICategoryCreate } from '../interfaces';
import { removeInvalidFields } from '../utils';
import CategoryModel from '../models/category';
import { ICategory } from '../interfaces/IDocuments';

const create = async (category: ICategoryCreate): Promise<ICategory> => {
	const categoryLint = removeInvalidFields({
		name: category.name,
		slug: category.slug,
	});

	return CategoryModel.create(categoryLint);
};

const get = async (): Promise<ICategory[]> => {
	return CategoryModel.find();
};

export default {
	create,
	get,
};
