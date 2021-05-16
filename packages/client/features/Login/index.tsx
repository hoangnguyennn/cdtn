import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Button from '../../components/core/Button';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import { PATH_NAME } from '../../configs/pathName';

import LoginStyled from './Login';

const Login = () => {
	const { t } = useTranslation();

	return (
		<LoginStyled>
			<Form className="login-form">
				<FormGroup>
					<Input />
				</FormGroup>

				<FormGroup>
					<Input />
				</FormGroup>

				<FormGroup className="actions">
					<div></div>
					<Link href={PATH_NAME.HOME}>
						<a>{t('Forgotten password?')}</a>
					</Link>
				</FormGroup>

				<FormGroup>
					<Button shadow className="submit">
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
