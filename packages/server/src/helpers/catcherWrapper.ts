import { Request, Response, NextFunction } from 'express';
import { MongoError } from 'mongodb';
import { AsyncFunction } from '../interfaces';
import { commonResponse } from './commonResponse';
import { HttpStatusCode } from '../interfaces/enums';
import { INTERNAL_SERVER_ERROR } from '../constants/commonResponseMessages';

const catcherWrapper = (fn: AsyncFunction) => {
	return (req: Request, res: Response, next?: NextFunction): Promise<void> =>
		fn(req, res, next).catch((err: MongoError | Error) => {
			if (err instanceof MongoError) {
				console.log(err.name, err.code);
			} else {
				console.log(err.name);
			}

			commonResponse(res, {
				hasError: true,
				message: INTERNAL_SERVER_ERROR,
				httpStatusCode: HttpStatusCode.HTTP_500,
			});
		});
};

export default catcherWrapper;
