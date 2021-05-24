import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import ProductUnitController from '../controllers/productUnit';

const router = Router();

router.post('/', catcherWrapper(ProductUnitController.create));

export default router;
