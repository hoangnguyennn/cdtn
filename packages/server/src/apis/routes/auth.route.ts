import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import { registerValidator } from '../../validates/auth.validate';
import { register } from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerValidator, catcherWrapper(register));

export default router;
