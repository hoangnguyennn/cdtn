import { IImageRequest } from '../interfaces';
import Image from '../models/image.model';

export const createProductImageService = (
	productImageRequest: IImageRequest
) => {
	return Image.create({
		url: productImageRequest.url,
	});
};

export default {
	createProductImageService,
};
