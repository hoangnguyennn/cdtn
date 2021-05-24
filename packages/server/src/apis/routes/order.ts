import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import OrderController from '../controllers/order';

const router = Router();

router.post('/', catcherWrapper(OrderController.create));

export default router;
