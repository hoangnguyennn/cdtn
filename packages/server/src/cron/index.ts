import { CronJob } from 'cron';

import ProductService from '../services/product';
import ImageService from '../services/image';
import UploadFileHelper from '../helpers/uploadFile';

const cron = () => {
	// run delete images at 0 AM every day
	const deleteImagesJob = new CronJob('* * * * *', async function () {
		const products = await ProductService.get();
		const productImages = products
			.map((product) => product.images)
			.reduce((total, images) => total?.concat(images || []), []);

		const imagesInDB = await ImageService.get();
		const imagesWillDelete = imagesInDB.filter((image) => {
			const indexInProductImages =
				productImages?.findIndex((productImage) =>
					productImage._id.equals(image._id)
				) || -1;

			return indexInProductImages === -1;
		});

		const deleteImagesPromises = imagesWillDelete.map((image) =>
			UploadFileHelper.deleteSingle(image.publicId)
		);

		return Promise.all(deleteImagesPromises);
	});

	deleteImagesJob.start();
};

export default cron;
