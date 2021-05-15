import { useTranslation } from 'react-i18next';

import MainLayout from '../layouts/MainLayout';
import PageTitle from '../components/PageTitle';
import Register from '../features/Register';
import { registerPage } from '../configs/breadcrumb';

const RegisterPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageTitle breadcrumb={registerPage()} title={t('Register Account')} />
			<div className="container">
				<Register />
			</div>
		</MainLayout>
	);
};

export default RegisterPage;
