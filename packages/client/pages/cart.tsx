import { useTranslation } from 'react-i18next';

import { cartPage } from '../configs/breadcrumb';
import Cart from '../features/Cart';
import MainLayout from '../layouts/MainLayout';
import PageContent from '../components/PageContent';

const CartPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageContent breadcrumb={cartPage()} title={t('Cart')}>
				<Cart />
			</PageContent>
		</MainLayout>
	);
};

export default CartPage;
