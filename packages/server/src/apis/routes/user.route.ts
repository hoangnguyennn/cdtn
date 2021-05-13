import { Router } from 'express';

import {
	checkAuth,
	checkSameUser,
	checkUserType,
} from '../../middlewares/auth.middleware';
import {
	getAllUser,
	getUserById,
	createNewUser,
	updateUserById,
} from '../controllers/user.controller';
import { UserTypes } from '../../interfaces/enums';
import catcherWrapper from '../../helpers/catcherWrapper';
import {
	createUserValidator,
	idValidator,
	updateUserValidator,
} from '../../validates/user.validate';

const router = Router();

router
	.route('/')
	.get(checkAuth, checkUserType(UserTypes.MANAGER), catcherWrapper(getAllUser))
	.post(createUserValidator, catcherWrapper(createNewUser));

router
	.route('/:id')
	.get(
		checkAuth,
		idValidator,
		checkUserType(UserTypes.MANAGER),
		catcherWrapper(getUserById)
	)
	.put(
		checkAuth,
		idValidator,
		checkSameUser,
		updateUserValidator,
		catcherWrapper(updateUserById)
	);

export default router;
