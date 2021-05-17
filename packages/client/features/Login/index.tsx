import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/core/Button';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import Invalid from '../../components/core/Invalid';
import LoginStyled from './Login';
import { PATH_NAME } from '../../configs/pathName';

import { ILogin } from '../../models';
import { loginAction } from '../../redux/reducers/auth.reducer';
import { useDispatch } from 'react-redux';

const Login = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const initialValues: ILogin = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email(t('Invalid email'))
			.required(t('Email is required')),
		password: Yup.string().required(t('Password is required')),
	});

	const handleSubmit = async (values: ILogin, { setSubmitting }) => {
		console.log('submit');
		dispatch(
			loginAction({
				email: values.email,
				password: values.password,
			})
		);

		setSubmitting(false);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: handleSubmit,
	});

	return (
		<LoginStyled>
			<Form className="login-form" onSubmit={formik.handleSubmit}>
				<FormGroup>
					<Input
						value={formik.values.email}
						name="email"
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder={t('Your email')}
					/>
					{formik.errors.email ? (
						<Invalid>{formik.errors.email}</Invalid>
					) : null}
				</FormGroup>

				<FormGroup>
					<Input
						type="password"
						value={formik.values.password}
						name="password"
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder={t('Enter password')}
					/>
					{formik.errors.password ? (
						<Invalid>{formik.errors.password}</Invalid>
					) : null}
				</FormGroup>

				<FormGroup className="actions">
					<div></div>
					<Link href={PATH_NAME.HOME}>
						<a>{t('Forgotten password?')}</a>
					</Link>
				</FormGroup>

				<FormGroup>
					<Button
						shadow
						className="submit"
						type="submit"
						disabled={formik.isSubmitting}
					>
						{t('Login')}
					</Button>
				</FormGroup>

				<FormGroup className="sign-up">
					{t('Not have account')}{' '}
					<Link href={PATH_NAME.REGISTER}>
						<a>{t('Here')}</a>
					</Link>
				</FormGroup>
			</Form>
		</LoginStyled>
	);
};

export default Login;
