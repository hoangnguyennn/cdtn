import { NextFunction, Request, Response } from 'express';

export default () => {
	return (req: Request, res: Response, next: NextFunction) => {
		console.log('--------------------');
		console.log('method', req.method);
		console.log('url', req.url);
		console.log('query', req.query);
		console.log('params', req.params);
		console.log('body', req.body);
		return next();
	};
};
