import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import OrderController from '../controllers/order';
import AuthMiddleware from '../../middlewares/auth';

const router = Router();

router.get('/', AuthMiddleware.checkAuth, catcherWrapper(OrderController.get));
router.post('/', catcherWrapper(OrderController.create));

export default router;
