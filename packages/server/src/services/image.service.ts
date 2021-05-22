import { IImageRequest } from '../interfaces';
import Image from '../models/image.model';

export const createProductImageService = (
	productImageRequest: IImageRequest
) => {
	return Image.create({
		imageUrl: productImageRequest.imageUrl,
	});
};

export default {
	createProductImageService,
};
