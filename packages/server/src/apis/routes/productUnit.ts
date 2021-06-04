import { Router } from 'express';

import { UserType } from '../../interfaces/enums';
import AuthMiddleware from '../../middlewares/auth';
import catcherWrapper from '../../helpers/catcherWrapper';
import ProductUnitController from '../controllers/productUnit';

const router = Router();

router
	.route('/')
	.get(catcherWrapper(ProductUnitController.get))
	.post(
		AuthMiddleware.checkAuth,
		AuthMiddleware.checkRole([UserType.MANAGER]),
		catcherWrapper(ProductUnitController.create)
	);

router
	.route('/:id')
	.get(catcherWrapper(ProductUnitController.getById))
	.post(
		AuthMiddleware.checkAuth,
		AuthMiddleware.checkRole([UserType.MANAGER]),
		catcherWrapper(ProductUnitController.update)
	);

export default router;
