import { Response } from 'express';
import { IServerResponse, IServiceResponse } from '../interfaces';

export const commonResponse = <T = any>(
	res: Response,
	serviceResponse: IServiceResponse<T>
): void => {
	const { hasError, data, message, httpStatusCode } = serviceResponse;

	if (hasError) {
		const response: IServerResponse = {
			message,
		};

		res.status(httpStatusCode).json(response).end();
		return;
	}

	const response: IServerResponse<T> = {
		data,
	};

	res.status(httpStatusCode).json(response).end();
	return;
};
