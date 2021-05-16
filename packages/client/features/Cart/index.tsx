import { useTranslation } from 'react-i18next';

import { toCurrency } from '../../utils/formatter';
import CartStyled from './Cart';
import FormGroup from '../../components/core/FormGroup';
import Form from '../../components/core/Form';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';

const Cart = () => {
	const { t } = useTranslation();

	return (
		<CartStyled>
			<div className="cart-sidebar">
				<div className="cart-detail">
					<h3 className="title">{t('Cart detail')}</h3>

					<FormGroup className="cart-item">
						<div className="thumbnail">
							<img
								src="http://vikinoko.com/resources/img/product-reishi.png"
								alt=""
							/>
						</div>
						<div className="info">
							<p className="name">Nam bao ngu tuoi</p>
							<div className="qty">
								<span className="qty-decreace">-</span>
								<input defaultValue="1" disabled />
								<span className="qty-increase">+</span>
							</div>
						</div>
						<div className="actions">
							<span className="action">{t('Delete')}</span>
							<span className="action">{t('Buy later')}</span>
							<span className="price">{toCurrency(123123)}</span>
						</div>
					</FormGroup>

					<FormGroup className="cart-item">
						<div className="thumbnail">
							<img
								src="http://vikinoko.com/resources/img/product-reishi.png"
								alt=""
							/>
						</div>
						<div className="info">
							<p className="name">Nam bao ngu tuoi</p>
							<div className="qty">
								<span className="qty-decreace">-</span>
								<input defaultValue="1" disabled />
								<span className="qty-increase">+</span>
							</div>
						</div>
						<div className="actions">
							<span className="action">{t('Delete')}</span>
							<span className="action">{t('Buy later')}</span>
							<span className="price">{toCurrency(123123)}</span>
						</div>
					</FormGroup>

					<FormGroup className="cart-item">
						<div className="thumbnail">
							<img
								src="http://vikinoko.com/resources/img/product-reishi.png"
								alt=""
							/>
						</div>
						<div className="info">
							<p className="name">Nam bao ngu tuoi</p>
							<div className="qty">
								<span className="qty-decreace">-</span>
								<input defaultValue="1" disabled />
								<span className="qty-increase">+</span>
							</div>
						</div>
						<div className="actions">
							<span className="action">{t('Delete')}</span>
							<span className="action">{t('Buy later')}</span>
							<span className="price">{toCurrency(123123)}</span>
						</div>
					</FormGroup>
				</div>
				<div className="cart-summary">
					<FormGroup>
						<label>{t('Subtotal')}</label>
						<span className="price">{toCurrency(123123)}</span>
					</FormGroup>

					<FormGroup>
						<label>{t('Delivery fee')}</label>
						<span className="price">{toCurrency(123123)}</span>
					</FormGroup>

					<FormGroup>
						<label>{t('Total')}</label>
						<span className="price total-price">{toCurrency(123123)}</span>
					</FormGroup>
				</div>
			</div>

			<Form className="cart-main">
				<div className="checkout-information">
					<h3 className="title">{t('Order information')}</h3>

					<FormGroup>
						<Input placeholder={t('Fullname')} />
					</FormGroup>

					<FormGroup>
						<Input placeholder={t('Phone')} />
					</FormGroup>

					<FormGroup>
						<Input placeholder={t('Email address')} />
					</FormGroup>

					<FormGroup>
						<Input placeholder={t('Address')} />
					</FormGroup>

					<FormGroup>
						<Input placeholder={t('Note')} />
					</FormGroup>
				</div>

				<div className="payment-methods">
					<h3 className="title">{t('Payment method')}</h3>

					<FormGroup as="label" className="payment-method">
						<input type="radio" />
						<div className="icon czi-check-circle"></div>
						<div>
							<h4>{t('Payment on delivery')}</h4>
						</div>
					</FormGroup>

					<FormGroup as="label" className="payment-method">
						<input type="radio" />
						<div className="icon czi-check-circle"></div>
						<div>
							<h4>{t('Payment on delivery')}</h4>
						</div>
					</FormGroup>

					<FormGroup as="label" className="payment-method">
						<input type="radio" />
						<div className="icon czi-check-circle"></div>
						<div>
							<h4>{t('Payment on delivery')}</h4>
						</div>
					</FormGroup>
				</div>

				<FormGroup>
					<Button shadow>{t('Checkout')}</Button>
				</FormGroup>
			</Form>
		</CartStyled>
	);
};

export default Cart;
