import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import PaymentMethodController from '../controllers/paymentMethod';

const router = Router();

router.get('/', catcherWrapper(PaymentMethodController.get));
router.post('/', catcherWrapper(PaymentMethodController.create));

export default router;
