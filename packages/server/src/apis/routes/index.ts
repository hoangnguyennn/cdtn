import { Router } from 'express';

import authRoute from './auth.route';
import uploadRoute from './upload.route';
import productUnitRoute from './productUnit.route';
import productRoute from './product.route';
import paymentMethodRoute from './paymenthMethod.route';

const router = Router();

router.use('/auth', authRoute);
router.use('/upload', uploadRoute);
router.use('/product-units', productUnitRoute);
router.use('/products', productRoute);
router.use('/payment-methods', paymentMethodRoute);

export default router;
