import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Button from '../../components/core/Button';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import { PATH_NAME } from '../../configs/pathName';

import RegisterStyled from './Register';

const Register = () => {
	const { t } = useTranslation();

	return (
		<RegisterStyled>
			<Form className="register-form">
				<FormGroup>
					<Input />
				</FormGroup>

				<FormGroup>
					<Input />
				</FormGroup>

				<FormGroup>
					<Input />
				</FormGroup>

				<FormGroup>
					<Input />
				</FormGroup>

				<FormGroup>
					<Input />
				</FormGroup>

				<FormGroup className="submit-group">
					<Button shadow className="submit">
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
