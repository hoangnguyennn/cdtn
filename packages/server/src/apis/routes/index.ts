import { Router } from 'express';

import authRoute from './auth';
import orderRoute from './order';
import paymentMethodRoute from './paymentMethod';
import productRoute from './product';
import productUnitRoute from './productUnit';
import uploadRoute from './upload';
import userRoute from './user';

const router = Router();

router.use('/auth', authRoute);
router.use('/orders', orderRoute);
router.use('/payment-methods', paymentMethodRoute);
router.use('/product-units', productUnitRoute);
router.use('/products', productRoute);
router.use('/upload', uploadRoute);
router.use('/users', userRoute);

export default router;
