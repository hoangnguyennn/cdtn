import { Request, Response, NextFunction } from 'express';
import { MongoError } from 'mongodb';
import { AsyncFunction } from '../interfaces';
import { commonResponse } from './commonResponse';
import { HttpStatusCode } from '../interfaces/enums';
import logger from '../utils/logger';
import { MONGO_ERROR } from './commonError';

const catcherWrapper = (fn: AsyncFunction) => {
	return (req: Request, res: Response, next?: NextFunction): Promise<void> =>
		fn(req, res, next).catch((err: MongoError | Error) => {
			let message = '';
			if (err instanceof MongoError) {
				message = MONGO_ERROR[`${err.code}`](err.errmsg);
				console.log(err.code);
			} else {
				message = err.message;
				console.log(err.name);
			}

			logger.error(err.message);

			commonResponse(res, {
				hasError: true,
				message: message,
				httpStatusCode: HttpStatusCode.HTTP_500,
			});
		});
};

export default catcherWrapper;
