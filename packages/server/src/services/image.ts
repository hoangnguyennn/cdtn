import { IImageRequest } from '../interfaces';
import ImageModel from '../models/image';

export const create = (image: IImageRequest) => {
	return ImageModel.create({
		url: image.url,
	});
};

export default {
	create,
};
