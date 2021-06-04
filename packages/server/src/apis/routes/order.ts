import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import OrderController from '../controllers/order';
import AuthMiddleware from '../../middlewares/auth';

const router = Router();

router
	.route('/')
	.get(AuthMiddleware.checkAuth, catcherWrapper(OrderController.get))
	.post(catcherWrapper(OrderController.create));

export default router;
