import { useTranslation } from 'react-i18next';

import { Root } from './PaymentMethod';

const OrderForm = () => {
	const { t } = useTranslation();

	return (
		<Root>
			<h3 className="title">{t('Payment method')}</h3>
			<div className="payment-methods">
				<label className="payment-method">
					<input type="radio" />
					<div className="icon czi-check-circle"></div>
					<div>
						<h4>{t('Payment on delivery')}</h4>
					</div>
				</label>

				<label className="payment-method">
					<input type="radio" />
					<div className="icon czi-check-circle"></div>
					<div>
						<h4>{t('Payment on delivery')}</h4>
					</div>
				</label>

				<label className="payment-method">
					<input type="radio" />
					<div className="icon czi-check-circle"></div>
					<div>
						<h4>{t('Payment on delivery')}</h4>
					</div>
				</label>
			</div>
			<div className="checkout-actions">
				<button className="checkout">{t('Checkout')}</button>
			</div>
		</Root>
	);
};

export default OrderForm;
