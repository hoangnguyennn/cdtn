import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Button from '../../components/core/Button';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import { IUserUpdateInfo } from '../../interfaces';
import { getUserInfo, updateUserInfoAction } from '../../redux/reducers/auth';
import Root from './MyAccount';
import { useEffect, useState } from 'react';

const MyAccount = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const userInfo = useSelector(getUserInfo);

	const [initialUserInforValues, setInitialUserInforValues] =
		useState<IUserUpdateInfo>({
			fullName: '',
			email: '',
			phone: '',
			address: '',
		});

	const userInforValidationSchema = Yup.object({
		fullName: Yup.string().required(),
		email: Yup.string().email().required(),
		phone: Yup.string().required(),
		address: Yup.string().required(),
	});

	const handleUserFormSubmit = (values: IUserUpdateInfo, { setSubmitting }) => {
		dispatch(updateUserInfoAction(userInfo.id, values));
		setSubmitting(false);
	};

	const userFormik = useFormik({
		initialValues: initialUserInforValues,
		enableReinitialize: true,
		validationSchema: userInforValidationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: handleUserFormSubmit,
	});

	const initialChangePasswordValues = {
		oldPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	};

	const changePasswordValidationSchema = Yup.object({
		oldPassword: Yup.string().required(),
		newPassword: Yup.string().required(),
		confirmNewPassword: Yup.string()
			.oneOf([Yup.ref('newPassword')])
			.required(),
	});

	const handleChangePasswordSubmit = (values: any, { setSubmitting }) => {
		dispatch(
			updateUserInfoAction(userInfo.id, { password: values.newPassword })
		);
		setSubmitting(false);
	};

	const changePasswordFormik = useFormik({
		initialValues: initialChangePasswordValues,
		validationSchema: changePasswordValidationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: handleChangePasswordSubmit,
	});

	useEffect(() => {
		setInitialUserInforValues((prevState) => ({
			...prevState,
			fullName: userInfo.fullName,
			email: userInfo.email,
			phone: userInfo.phone,
			address: userInfo.address,
		}));
	}, [userInfo]);

	return (
		<Root>
			<Form className="user-info" onSubmit={userFormik.handleSubmit}>
				<h3>{t('Account information')}</h3>
				<FormGroup>
					<Input
						name="fullName"
						onBlur={userFormik.handleBlur}
						onChange={userFormik.handleChange}
						placeholder={t('Fullname')}
						required
						value={userFormik.values.fullName}
					/>
				</FormGroup>

				<FormGroup>
					<Input
						name="phone"
						onBlur={userFormik.handleBlur}
						onChange={userFormik.handleChange}
						placeholder={t('Phone')}
						required
						value={userFormik.values.phone}
					/>
				</FormGroup>

				<FormGroup>
					<Input
						name="email"
						onBlur={userFormik.handleBlur}
						onChange={userFormik.handleChange}
						placeholder={t('Email address')}
						required
						value={userFormik.values.email}
					/>
				</FormGroup>

				<FormGroup>
					<Input
						name="address"
						onBlur={userFormik.handleBlur}
						onChange={userFormik.handleChange}
						placeholder={t('Address')}
						required
						value={userFormik.values.address}
					/>
				</FormGroup>

				<FormGroup>
					<Button
						shadow
						type="submit"
						className="submit"
						disabled={userFormik.isSubmitting}
					>
						{t('Update')}
					</Button>
				</FormGroup>
			</Form>

			<Form
				className="update-password"
				onSubmit={changePasswordFormik.handleSubmit}
			>
				<h3>{t('Change password')}</h3>

				<FormGroup>
					<Input
						name="oldPassword"
						onBlur={changePasswordFormik.handleBlur}
						onChange={changePasswordFormik.handleChange}
						placeholder={t('Current password')}
						required
						value={changePasswordFormik.values.oldPassword}
					/>
				</FormGroup>

				<FormGroup>
					<Input
						name="newPassword"
						onBlur={changePasswordFormik.handleBlur}
						onChange={changePasswordFormik.handleChange}
						placeholder={t('New password')}
						required
						value={changePasswordFormik.values.newPassword}
					/>
				</FormGroup>

				<FormGroup>
					<Input
						name="confirmNewPassword"
						onBlur={changePasswordFormik.handleBlur}
						onChange={changePasswordFormik.handleChange}
						placeholder={t('Confirm new password')}
						required
						value={changePasswordFormik.values.confirmNewPassword}
					/>
				</FormGroup>

				<FormGroup>
					<Button
						shadow
						type="submit"
						className="submit"
						disabled={changePasswordFormik.isSubmitting}
					>
						{t('Update')}
					</Button>
				</FormGroup>
			</Form>
		</Root>
	);
};

export default MyAccount;
