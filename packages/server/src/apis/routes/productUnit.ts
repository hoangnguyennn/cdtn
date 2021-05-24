import { Router } from 'express';
import catcherWrapper from '../../helpers/catcherWrapper';

import { createNewProductUnitController } from '../controllers/productUnit';

const router = Router();

router.post('/', catcherWrapper(createNewProductUnitController));

export default router;
