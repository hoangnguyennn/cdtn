import { IProduct, IServiceResponse } from '../interfaces';
import { NOT_FOUND } from '../constants/commonResponseMessages';
import { HttpStatusCode, ProductStatuses } from '../interfaces/enums';
import Product from '../models/product.model';

export const getAll = async (): Promise<IServiceResponse<IProduct[]>> => {
  const products = await Product.find();
  return {
    hasError: false,
    httpStatusCode: HttpStatusCode.HTTP_200,
    data: products,
  };
};

export const getById = async (
  id: string
): Promise<IServiceResponse<IProduct>> => {
  const product = await Product.findOne({
    _id: id,
    status: ProductStatuses.TRADING,
  });

  if (!product) {
    return {
      hasError: true,
      httpStatusCode: HttpStatusCode.HTTP_404,
      message: NOT_FOUND,
    };
  }

  return {
    hasError: false,
    httpStatusCode: HttpStatusCode.HTTP_200,
    data: product,
  };
};

export default {
  getAll,
  getById,
};
