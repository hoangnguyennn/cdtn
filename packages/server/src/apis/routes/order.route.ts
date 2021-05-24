import { Router } from 'express';
import catcherWrapper from '../../helpers/catcherWrapper';

import { createNewOrderController } from '../controllers/order.controller';

const router = Router();

router.post('/', catcherWrapper(createNewOrderController));

export default router;
