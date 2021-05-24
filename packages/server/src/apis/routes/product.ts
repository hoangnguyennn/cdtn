import { Router } from 'express';

import {
	createNewProductController,
	getProductByIdController,
	getTrendingProductsController,
} from '../controllers/product';
import catcherWrapper from '../../helpers/catcherWrapper';

const router = Router();

router.post('/', catcherWrapper(createNewProductController));

router.get('/trending', catcherWrapper(getTrendingProductsController));

router.get('/:id', catcherWrapper(getProductByIdController));

export default router;
