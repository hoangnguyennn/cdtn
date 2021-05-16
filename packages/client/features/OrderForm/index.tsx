import { useTranslation } from 'react-i18next';

import { Root } from './OrderForm';

const OrderForm = () => {
	const { t } = useTranslation();

	return (
		<Root>
			<h3 className="title">{t('Order information')}</h3>
			<div className="order-form">
				<input
					// ref={emailRef}
					type="text"
					className="fullname"
					placeholder={t('Fullname')}
					required
				/>
				<input
					// ref={emailRef}
					type="text"
					className="phone"
					placeholder={t('Phone')}
					required
				/>
				<input
					// ref={emailRef}
					type="text"
					className="email"
					placeholder={t('Your email')}
					required
				/>
				<input
					// ref={emailRef}
					type="text"
					className="address"
					placeholder={t('Address')}
					required
				/>
				<textarea
					// ref={emailRef}
					className="note"
					placeholder={t('Note')}
					required
				/>
			</div>
		</Root>
	);
};

export default OrderForm;
