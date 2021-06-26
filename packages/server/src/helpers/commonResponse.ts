import { NextFunction, Request, Response } from 'express';

const isDev = process.env.NODE !== 'production';

export enum HttpStatusCode {
  HTTP_200 = 200,
  HTTP_400 = 400,
  HTTP_401 = 401,
  HTTP_403 = 403,
  HTTP_404 = 404,
  HTTP_500 = 500
}

export enum COMMON_MESSAGE {
  BAD_REQUEST = 'bad request',
  FORBIDDEN = 'forbidden',
  INTERNAL_SERVER_ERROR = 'internal server error',
  INVALID_TOKEN = 'invalid token',
  NOT_FOUND = 'not found',
  SUCCESS = 'success',
  UNAUTHORIZED = 'unauthorized'
}

export class HttpError extends Error {
  httpStatusCode: HttpStatusCode;

  constructor(message: string, httpStatusCode: HttpStatusCode, stack?: any) {
    super(message);

    this.stack = stack;
    this.httpStatusCode = httpStatusCode;
  }
}

export const success = (res: Response, data: any = {}) => {
  return res.status(HttpStatusCode.HTTP_200).json(data);
};

export const badRequest = (
  next: NextFunction,
  message: string = COMMON_MESSAGE.BAD_REQUEST
) => {
  const error = new HttpError(message, HttpStatusCode.HTTP_400);
  return next(error);
};

export const unauthorized = (
  next: NextFunction,
  message: string = COMMON_MESSAGE.UNAUTHORIZED
) => {
  const error = new HttpError(message, HttpStatusCode.HTTP_401);
  return next(error);
};

export const forbidden = (
  next: NextFunction,
  message: string = COMMON_MESSAGE.FORBIDDEN
) => {
  const error = new HttpError(message, HttpStatusCode.HTTP_403);
  return next(error);
};

export const notFound = (
  next: NextFunction,
  message: string = COMMON_MESSAGE.NOT_FOUND
) => {
  const error = new HttpError(message, HttpStatusCode.HTTP_404);
  return next(error);
};

export const internalServerError = (
  next: NextFunction,
  message: string = COMMON_MESSAGE.INTERNAL_SERVER_ERROR
) => {
  const error = new HttpError(message, HttpStatusCode.HTTP_500);
  return next(error);
};

export const handleError = (
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  return res.status(err.httpStatusCode || 500).json({
    message: err.message,
    stack: isDev ? err.stack : undefined
  });
};
