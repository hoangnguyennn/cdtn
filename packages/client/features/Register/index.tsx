import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Link from 'next/link';

import { IRegisterForm } from '../../interfaces/index';
import { PATH_NAME } from '../../configs/pathName';
import { registerAction } from '../../redux/reducers/auth';
import Button from '../../components/core/Button';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import Invalid from '../../components/core/Invalid';
import RegisterStyled from './Register';

const Register = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const initialValues: IRegisterForm = {
		fullName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	};

	const validationSchema = Yup.object({
		fullName: Yup.string().required(t('This field is required')),
		email: Yup.string().email().required(t('This field is required')),
		phone: Yup.string().required(t('This field is required')),
		password: Yup.string().required(t('This field is required')),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], t('Password must be same'))
			.required(t('This field is required')),
	});

	const handleSubmit = (values: IRegisterForm, { setSubmitting }) => {
		dispatch(
			registerAction({
				fullName: values.fullName,
				email: values.email,
				phone: values.phone,
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
		<RegisterStyled>
			<Form className="register-form" onSubmit={formik.handleSubmit}>
				<FormGroup>
					<Input
						value={formik.values.fullName}
						name="fullName"
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder={t('Fullname')}
					/>
					{formik.errors.fullName ? (
						<Invalid>{formik.errors.fullName}</Invalid>
					) : null}
				</FormGroup>

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
						value={formik.values.phone}
						name="phone"
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder={t('Phone')}
					/>
					{formik.errors.phone ? (
						<Invalid>{formik.errors.phone}</Invalid>
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

				<FormGroup>
					<Input
						type="password"
						value={formik.values.confirmPassword}
						name="confirmPassword"
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder={t('Confirm password')}
					/>
					{formik.errors.confirmPassword ? (
						<Invalid>{formik.errors.confirmPassword}</Invalid>
					) : null}
				</FormGroup>

				<FormGroup className="submit-group">
					<Button
						shadow
						className="submit"
						type="submit"
						disabled={formik.isSubmitting}
					>
						{t('Register')}
					</Button>
				</FormGroup>

				<FormGroup className="sign-in">
					<span>{t('or')}</span>
					<br />
					<Link href={PATH_NAME.LOGIN}>
						<a>{t('Login')}</a>
					</Link>
				</FormGroup>
			</Form>
		</RegisterStyled>
	);
};

export default Register;
