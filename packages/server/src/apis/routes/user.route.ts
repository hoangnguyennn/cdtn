import { Router } from 'express';

import { checkAuth, checkUserType } from '../../middlewares/auth.middleware';
import {
	getAllUser,
	getUserById,
	createNewUser,
} from '../controllers/user.controller';
import { UserTypes } from '../../interfaces/enums';
import catcherWrapper from '../../helpers/catcherWrapper';

const router = Router();

router
	.route('/')
	.get(checkAuth, checkUserType(UserTypes.MANAGER), catcherWrapper(getAllUser))
	.post(catcherWrapper(createNewUser));

router.route('/:id').get(checkAuth, catcherWrapper(getUserById)).put().delete();

export default router;
