import { Router } from 'express';

import { UserType } from '../../interfaces/enums';
import AuthMiddleware from '../../middlewares/auth';
import catcherWrapper from '../../helpers/catcherWrapper';
import ProductController from '../controllers/product';

const router = Router();

router
	.route('/')
	.get(catcherWrapper(ProductController.get))
	.post(
		AuthMiddleware.checkAuth,
		AuthMiddleware.checkRole([UserType.MANAGER]),
		catcherWrapper(ProductController.create)
	);

router.get('/trending', catcherWrapper(ProductController.getTrending));

router
	.route('/:id')
	.get(catcherWrapper(ProductController.getById))
	.patch(
		AuthMiddleware.checkAuth,
		AuthMiddleware.checkRole([UserType.MANAGER]),
		catcherWrapper(ProductController.updateProduct)
	);

export default router;
