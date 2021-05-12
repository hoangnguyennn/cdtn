import { Router } from 'express';

import catcherWrapper from '../../helpers/catcherWrapper';
import { getAllUser } from '../controllers/user.controller';

const router = Router();

router.get('/', catcherWrapper(getAllUser));

export default router;
