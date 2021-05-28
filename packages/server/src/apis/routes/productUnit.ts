import { Router } from 'express';

import { UserType } from '../../interfaces/enums';
import AuthMiddleware from '../../middlewares/auth';
import catcherWrapper from '../../helpers/catcherWrapper';
import ProductUnitController from '../controllers/productUnit';

const router = Router();

router.post(
	'/',
	AuthMiddleware.checkAuth,
	AuthMiddleware.checkRole([UserType.MANAGER]),
	catcherWrapper(ProductUnitController.create)
);

export default router;
