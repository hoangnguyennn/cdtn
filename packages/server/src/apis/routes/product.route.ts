import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import {
	getAllProduct,
	getProductById,
} from '../controllers/product.controller';

const router = Router();

router.get('/', catcherWrapper(getAllProduct));
router.get('/:id', catcherWrapper(getProductById));

export default router;
