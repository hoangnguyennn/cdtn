import { Router } from 'express';

import { checkAuth } from '../../middlewares/auth';
import {
	getCurrentUserController,
	loginController,
	registerAccountController,
} from '../controllers/auth';
import catcherWrapper from '../../helpers/catcherWrapper';
import { loginValidate, registerValidate } from '../../validates/auth.validate';

const router = Router();

router.post('/login', loginValidate, catcherWrapper(loginController));
router.post(
	'/register',
	registerValidate,
	catcherWrapper(registerAccountController)
);
router.post('/me', checkAuth, catcherWrapper(getCurrentUserController));

export default router;
