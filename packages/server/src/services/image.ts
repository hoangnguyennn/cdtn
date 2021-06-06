import { IImage } from '../interfaces/IDocuments';
import { IImageCreate } from '../interfaces';
import ImageModel from '../models/image';

const get = async (): Promise<IImage[]> => {
	return ImageModel.find();
};

const create = async (image: IImageCreate): Promise<IImage> => {
	return ImageModel.create({ url: image.url, publicId: image.publicId });
};

export default {
	create,
	get,
};
