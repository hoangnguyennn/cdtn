import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import Button from '../../components/core/Button';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import Root from './MyAccount';

const MyAccount = () => {
	const { t } = useTranslation();

	const initialUserInforValues = {};

	const userInforValidationSchema = {};

	const handleUserFormSubmit = (values, { setSubmitting }) => {
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

	const initialChangePasswordValues = {};

	const changePasswordValidationSchema = {};

	const handleChangePasswordSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);
	};

	const changePasswordFormik = useFormik({
		initialValues: initialChangePasswordValues,
		validationSchema: changePasswordValidationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: handleChangePasswordSubmit,
	});

	return (
		<Root>
			<Form className="user-info">
				<h3>{t('Account information')}</h3>
				<FormGroup>
					<Input placeholder={t('Fullname')} />
				</FormGroup>

				<FormGroup>
					<Input placeholder={t('Phone')} />
				</FormGroup>

				<FormGroup>
					<Input placeholder={t('Email address')} />
				</FormGroup>

				<FormGroup>
					<Input placeholder={t('Address')} />
				</FormGroup>

				<FormGroup>
					<Button shadow type="submit" className="submit">
						{t('Update')}
					</Button>
				</FormGroup>
			</Form>

			<Form className="update-password">
				<h3>{t('Change password')}</h3>

				<FormGroup>
					<Input placeholder={t('Current password')} />
				</FormGroup>

				<FormGroup>
					<Input placeholder={t('New password')} />
				</FormGroup>

				<FormGroup>
					<Input placeholder={t('Confirm new password')} />
				</FormGroup>

				<FormGroup>
					<Button shadow type="submit" className="submit">
						{t('Update')}
					</Button>
				</FormGroup>
			</Form>
		</Root>
	);
};

export default MyAccount;
