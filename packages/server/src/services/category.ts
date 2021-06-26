import { ICategoryCreate } from '../interfaces';
import { removeInvalidFields } from '../utils';
import CategoryModel from '../models/category';
import { ICategory } from '../interfaces/IDocuments';
import {
  COMMON_MESSAGE,
  HttpError,
  HttpStatusCode
} from '../helpers/commonResponse';

const create = async (category: ICategoryCreate): Promise<ICategory> => {
  const categoryLint = removeInvalidFields({
    name: category.name,
    slug: category.slug
  });

  return CategoryModel.create(categoryLint);
};

const get = async (): Promise<ICategory[]> => {
  return CategoryModel.find();
};

const getBySlug = async (slug: string): Promise<ICategory> => {
  const category = await CategoryModel.findOne({ slug });

  if (!category) {
    throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
  }

  return category;
};

export default {
  create,
  get,
  getBySlug
};
