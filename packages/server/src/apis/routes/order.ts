import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import OrderController from '../controllers/order';
import AuthMiddleware from '../../middlewares/auth';
import { UserType } from '../../interfaces/enums';

const router = Router();

router
	.route('/')
	.get(AuthMiddleware.checkAuth, catcherWrapper(OrderController.get))
	.post(catcherWrapper(OrderController.create));

router
	.route('/:id/update-status')
	.post(
		AuthMiddleware.checkAuth,
		AuthMiddleware.checkRole([UserType.MANAGER]),
		catcherWrapper(OrderController.updateOrderStatus)
	);

export default router;
