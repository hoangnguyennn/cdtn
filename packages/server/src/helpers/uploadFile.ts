import { Request, Response } from 'express';
import { v2 as cloudinaryV2 } from 'cloudinary';
import fs from 'fs';

import configs from '../configs';
import { success } from './commonResponse';

cloudinaryV2.config({
	cloud_name: configs.cloudName,
	api_key: configs.cloudKey,
	api_secret: configs.cloudSecret,
});

const UploadFileHelper = {
	uploadSingle: async (file: string) => {
		return cloudinaryV2.uploader
			.upload(file)
			.then((res) => {
				fs.unlinkSync(file);
				return {
					url: res?.secure_url,
					publicId: res?.public_id,
				};
			})
			.catch((err) => {
				console.log('error', err);
				throw err;
			});
	},
	deleteSingle: async (publicId: string) => {
		return cloudinaryV2.uploader.destroy(publicId);
	},
};

const uploadSingleFile = async (req: Request, res: Response) => {
	const fileUrl = await UploadFileHelper.uploadSingle(req.file.path);
	return success(res, fileUrl);
};

export { uploadSingleFile, UploadFileHelper };
