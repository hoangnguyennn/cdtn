import { IProductImageRequest } from '../interfaces';
import ProductImage from '../models/productImage.model';

export const createProductImageService = (
	productImageRequest: IProductImageRequest
) => {
	return ProductImage.create({
		productId: productImageRequest.productId,
		imageUrl: productImageRequest.imageUrl,
	});
};

export default {
	createProductImageService,
};
