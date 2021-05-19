import { celebrate, Joi, Segments } from 'celebrate';

import { UserTypes } from '../interfaces/enums';

export const registerValidate = celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().email().required(),
		password: Joi.string().required(),
		fullName: Joi.string().required(),
		phone: Joi.string().max(20).min(8).required(),
		userType: Joi.string().valid(UserTypes.CUSTOMER).required(),
	}),
});

export const loginValidate = celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	}),
});
