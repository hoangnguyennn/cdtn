import { IImage } from '../interfaces/IDocuments';
import { IImageCreate } from '../interfaces';
import ImageModel from '../models/image';

const create = (image: IImageCreate): Promise<IImage> => {
	return ImageModel.create({ url: image.url });
};

export default {
	create,
};
