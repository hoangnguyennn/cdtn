import { Router } from 'express';

import authRoute from './auth.route';
import uploadRoute from './upload.route';
import productUnitRoute from './productUnit.route';
import productRoute from './product.route';

const router = Router();

router.use('/auth', authRoute);
router.use('/upload', uploadRoute);
router.use('/product-units', productUnitRoute);
router.use('/products', productRoute);

export default router;
