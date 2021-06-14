import { ICategoryCreate } from '../interfaces';
import { removeInvalidFields } from '../utils';
import CategoryModel from '../models/category';

const create = async (category: ICategoryCreate) => {
	const categoryLint = removeInvalidFields({
		name: category.name,
		slug: category.slug,
	});

	return CategoryModel.create(categoryLint);
};

export default {
	create,
};
