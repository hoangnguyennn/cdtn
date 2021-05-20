import { v2 as cloudinaryV2 } from 'cloudinary';
import { Request, Response } from 'express';
import fs from 'fs';

import configs from '../configs';
import { success } from './commonResponse';

cloudinaryV2.config({
	cloud_name: configs.cloudName,
	api_key: configs.cloudKey,
	api_secret: configs.cloudSecret,
});

const uploadFileHelper = {
	uploadSingle: async (file: string) => {
		return new Promise((resolve) => {
			cloudinaryV2.uploader.upload(file, (err, res) => {
				if (err) {
					console.log('error', err);
				} else {
					fs.unlinkSync(file);
					resolve({ url: res?.secure_url });
				}
			});
		});
	},
};

const uploadSingleFile = async (req: Request, res: Response) => {
	const fileUrl = await uploadFileHelper.uploadSingle(req.file.path);
	return success(res, fileUrl);
};

export { uploadSingleFile };
