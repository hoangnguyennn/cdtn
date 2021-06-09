import { IImage } from '../interfaces/IDocuments';
import { IImageCreate } from '../interfaces';
import ImageModel from '../models/image';
import { removeInvalidFields } from '../utils';

const get = async (): Promise<IImage[]> => {
	return ImageModel.find();
};

const create = async (image: IImageCreate): Promise<IImage> => {
	const imageLint = removeInvalidFields({
		url: image.url,
		publicId: image.publicId,
	});

	return ImageModel.create(imageLint);
};

export default {
	create,
	get,
};
