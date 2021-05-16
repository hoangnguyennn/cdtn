import { useTranslation } from 'react-i18next';

import MainLayout from '../layouts/MainLayout';
import PageTitle from '../components/PageTitle';
import CartSummary from '../features/CartSummary';
import PaymentMethod from '../features/PaymentMethod';
import { cartPage } from '../configs/breadcrumb';
import OrderForm from '../features/OrderForm';

const CartPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageTitle breadcrumb={cartPage()} title={t('Cart')} />
			<div className="container">
				<CartSummary />
				<div>
					<OrderForm />
					<PaymentMethod />
				</div>
			</div>
		</MainLayout>
	);
};

export default CartPage;
