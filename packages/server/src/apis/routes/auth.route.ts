import { Router } from 'express';

import { checkAuth } from '../../middlewares/auth.middleware';
import {
	getCurrentUserController,
	loginController,
	registerAccountController,
} from '../controllers/auth.controller';
import catcherWrapper from '../../helpers/catcherWrapper';

const router = Router();

router.post('/login', catcherWrapper(loginController));
router.post('/register', catcherWrapper(registerAccountController));
router.post('/me', checkAuth, catcherWrapper(getCurrentUserController));

export default router;
