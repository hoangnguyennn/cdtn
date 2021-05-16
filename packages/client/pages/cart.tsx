import { useTranslation } from 'react-i18next';

import { cartPage } from '../configs/breadcrumb';
import Cart from '../features/Cart';
import MainLayout from '../layouts/MainLayout';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

const CartPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageTitle breadcrumb={cartPage()} title={t('Cart')} />
			<PageContent>
				<Cart />
			</PageContent>
		</MainLayout>
	);
};

export default CartPage;
