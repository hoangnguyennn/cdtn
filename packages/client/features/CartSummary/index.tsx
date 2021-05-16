import { useTranslation } from 'react-i18next';
import { toCurrency } from '../../utils/formatter';

import { Root } from './CartSummary';

const CartSummary = () => {
	const { t } = useTranslation();
	return (
		<Root>
			<div className="item">
				<label>{t('Sub total')}</label>
				<span className="price">{toCurrency(123123)}</span>
			</div>

			<div className="item">
				<label>{t('Delivery fee')}</label>
				<span className="price">{toCurrency(123123)}</span>
			</div>

			<div className="item">
				<label>{t('Total')}</label>
				<span className="price total-price">{toCurrency(123123)}</span>
			</div>
		</Root>
	);
};

export default CartSummary;
