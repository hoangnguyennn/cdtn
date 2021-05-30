import { useTranslation } from 'react-i18next';

import { myAccountPage } from '../../configs/breadcrumb';
import MainLayout from '../../layouts/MainLayout';
import MyAccount from '../../features/MyAccount';
import PageContent from '../../components/PageContent';

const MyAccountPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageContent breadcrumb={myAccountPage()} title={t('My account')}>
				<MyAccount />
			</PageContent>
		</MainLayout>
	);
};

export default MyAccountPage;
