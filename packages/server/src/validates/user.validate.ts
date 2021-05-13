import { celebrate, Joi, Segments } from 'celebrate';
import { UserTypes } from '../interfaces/enums';

export const idValidator = celebrate({
	[Segments.PARAMS]: {
		id: Joi.string().length(24),
	},
});

export const createUserValidator = celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().email().required(),
		passwordHashed: Joi.string().required(),
		fullName: Joi.string().required(),
		phone: Joi.string().max(20).min(8).required(),
		userType: Joi.string()
			.valid(...Object.values(UserTypes))
			.required(),
	}),
});

export const updateUserValidator = celebrate({
	[Segments.BODY]: Joi.object().keys({
		fullName: Joi.string(),
		phone: Joi.string().max(20).min(8),
		address: Joi.string().max(200),
	}),
	[Segments.PARAMS]: {
		id: Joi.string().length(24),
	},
});

export default {
	createUserValidator,
	updateUserValidator,
	idValidator,
};
