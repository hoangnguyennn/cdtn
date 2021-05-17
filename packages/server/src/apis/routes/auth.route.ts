import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import {
	registerValidator,
	loginValidator,
} from '../../validates/auth.validate';
import { login, register } from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerValidator, catcherWrapper(register));
router.post('/login', loginValidator, catcherWrapper(login));

export default router;
