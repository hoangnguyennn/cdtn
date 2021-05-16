import { useTranslation } from 'react-i18next';

import { loginPage } from '../configs/breadcrumb';
import Login from '../features/Login';
import MainLayout from '../layouts/MainLayout';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

const LoginPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageTitle breadcrumb={loginPage()} title={t('Login')} />
			<PageContent>
				<Login />
			</PageContent>
		</MainLayout>
	);
};

export default LoginPage;
