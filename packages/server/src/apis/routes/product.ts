import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import ProductController from '../controllers/product';

const router = Router();

router.get('/', catcherWrapper(ProductController.get));
router.post('/', catcherWrapper(ProductController.create));

router.get('/trending', catcherWrapper(ProductController.getTrending));

router.get('/:id', catcherWrapper(ProductController.getById));

export default router;
