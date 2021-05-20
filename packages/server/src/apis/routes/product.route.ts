import { Router } from 'express';

import {
	createNewProductController,
	getTrendingProductsController,
} from '../controllers/product.controller';
import catcherWrapper from '../../helpers/catcherWrapper';

const router = Router();

router.post('/', catcherWrapper(createNewProductController));

router.get('/trending', catcherWrapper(getTrendingProductsController));

export default router;
