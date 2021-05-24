import { IImageRequest } from '../interfaces';
import Image from '../models/image';

export const create = (image: IImageRequest) => {
	return Image.create({
		url: image.url,
	});
};

export default {
	create,
};
