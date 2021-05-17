import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/core/Button';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import Invalid from '../../components/core/Invalid';
import RegisterStyled from './Register';
import { PATH_NAME } from '../../configs/pathName';

import { registerAction } from '../../redux/reducers/auth.reducer';
import { IRegisterForm, IUserType } from '../../models';

const Register = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const initialValues: IRegisterForm = {
		fullname: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	};

	const validationSchema = Yup.object({
		fullname: Yup.string().required(t('Fullname is required')),
		email: Yup.string()
			.email(t('Invalid email'))
			.required(t('Email is required')),
		phone: Yup.string().required(t('Phone is required')),
		password: Yup.string().required(t('Password is required')),
		confirmPassword: Yup.string()
			.oneOf(
				[Yup.ref('password')],
				t('Confirm password must be equal to password')
			)
			.required(t('Confirm password is required')),
	});

	const handleSubmit = async (values: IRegisterForm, { setSubmitting }) => {
		console.log('submit');
		dispatch(
			registerAction({
				email: values.email,
				fullName: values.fullname,
				passwordHashed: values.password,
				phone: values.phone,
				userType: IUserType.CUSTOMER,
			})
		);

		setSubmitting(false);
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: handleSubmit,
	});

	return (
		<RegisterStyled>
			<Form className="register-form" onSubmit={formik.handleSubmit}>
				<FormGroup>
					<Input
						value={formik.values.fullname}
						name="fullname"
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder={t('Fullname')}
					/>
					{formik.errors.fullname ? (
						<Invalid>{formik.errors.fullname}</Invalid>
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
