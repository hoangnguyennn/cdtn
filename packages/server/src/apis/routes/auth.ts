import { Router } from 'express';

import { checkAuth } from '../../middlewares/auth';
import AuthController from '../controllers/auth';
import AuthValidator from '../../validates/auth';
import catcherWrapper from '../../helpers/catcherWrapper';

const router = Router();

router.post(
	'/login',
	AuthValidator.login,
	catcherWrapper(AuthController.login)
);

router.post(
	'/register',
	AuthValidator.register,
	catcherWrapper(AuthController.register)
);

router.post('/me', checkAuth, catcherWrapper(AuthController.getCurrentUser));

export default router;
