import { useTranslation } from 'react-i18next';

import { loginPage } from '../configs/breadcrumb';
import Login from '../features/Login';
import MainLayout from '../layouts/MainLayout';
import PageContent from '../components/PageContent';

const LoginPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageContent breadcrumb={loginPage()} title={t('Login')}>
				<Login />
			</PageContent>
		</MainLayout>
	);
};

export default LoginPage;
