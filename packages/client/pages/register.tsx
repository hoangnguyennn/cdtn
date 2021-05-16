import { useTranslation } from 'react-i18next';

import { registerPage } from '../configs/breadcrumb';
import MainLayout from '../layouts/MainLayout';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';
import Register from '../features/Register';

const RegisterPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageTitle breadcrumb={registerPage()} title={t('Register Account')} />
			<PageContent>
				<Register />
			</PageContent>
		</MainLayout>
	);
};

export default RegisterPage;
