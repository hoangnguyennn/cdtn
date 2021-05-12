import { Request, Response } from 'express';
import { commonResponse } from './commonResponse';
import { HttpStatusCode } from '../interfaces/enums';
import { NOT_FOUND } from '../constants/commonResponseMessages';

const notFound = (req: Request, res: Response, next: Function) =>
  commonResponse(res, {
    hasError: true,
    message: NOT_FOUND,
    httpStatusCode: HttpStatusCode.HTTP_404,
  });

export default notFound;
