import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import {
	createNewPaymentMethodController,
	getPaymentMethodsController,
} from '../controllers/paymentMethod';

const router = Router();

router.get('/', catcherWrapper(getPaymentMethodsController));
router.post('/', catcherWrapper(createNewPaymentMethodController));

export default router;
