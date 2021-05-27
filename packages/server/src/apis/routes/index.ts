import { Router } from 'express';

import orderRoute from './order';
import paymentMethodRoute from './paymentMethod';
import productRoute from './product';
import productUnitRoute from './productUnit';
import uploadRoute from './upload';

const router = Router();

router.use('/orders', orderRoute);
router.use('/payment-methods', paymentMethodRoute);
router.use('/product-units', productUnitRoute);
router.use('/products', productRoute);
router.use('/upload', uploadRoute);

export default router;
