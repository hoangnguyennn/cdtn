import { useTranslation } from 'react-i18next';
import { myOrderPage } from '../../../configs/breadcrumb';
import MainLayout from '../../../layouts/MainLayout';
import PageContent from '../../../components/PageContent';
import MyOrderDetail from '../../../features/MyOrderDetail';

const MyOrderDetailPage = () => {
	const { t } = useTranslation();
	return (
		<MainLayout>
			<PageContent breadcrumb={myOrderPage()} title={t('Order detail')}>
				<MyOrderDetail />
			</PageContent>
		</MainLayout>
	);
};

export default MyOrderDetailPage;
