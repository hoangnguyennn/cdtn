import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import {
	createNewPaymentMethodController,
	getPaymentMethodsController,
} from '../controllers/paymentMethod.controller';

const router = Router();

router.get('/', catcherWrapper(getPaymentMethodsController));
router.post('/', catcherWrapper(createNewPaymentMethodController));

export default router;
