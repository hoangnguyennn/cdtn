import { useTranslation } from 'react-i18next';

import MainLayout from '../layouts/MainLayout';
import PageTitle from '../components/PageTitle';
import Login from '../features/Login';
import { loginPage } from '../configs/breadcrumb';

const LoginPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageTitle breadcrumb={loginPage()} title={t('Login')} />
			<div className="container">
				<Login />
			</div>
		</MainLayout>
	);
};

export default LoginPage;
