import { useTranslation } from 'react-i18next';

import { toCurrency } from '../../utils/formatter';
import CartStyled from './Cart';
import FormGroup from '../../components/core/FormGroup';
import Form from '../../components/core/Form';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCartItems,
	getCartSubtotal,
	getDeliveryFee,
	removeFromCart,
	updateQty,
} from '../../redux/reducers/cart.reducer';
import { getUserInfo } from '../../redux/reducers/auth.reducer';

const Cart = () => {
	const { t } = useTranslation();

	const cartItems = useSelector(getCartItems);
	const cartSubtotal = useSelector(getCartSubtotal);
	const userInfo = useSelector(getUserInfo);
	const dispatch = useDispatch();

	return (
		<CartStyled>
			<div className="cart-sidebar">
				<div className="cart-detail">
					<h3 className="title">{t('Cart detail')}</h3>

					{cartItems.length ? (
						cartItems.map((item) => (
							<FormGroup className="cart-item" key={item.id}>
								<div className="thumbnail">
									<img src={item.images[0] || ''} alt="" />
								</div>
								<div className="info">
									<p className="name">{item.name}</p>
									<div className="qty">
										<span
											className={`qty-decreace ${
												item.qty > 0 ? '' : 'disabled'
											}`}
											onClick={() => {
												if (item.qty > 0) {
													dispatch(
														updateQty({ id: item.id, qty: item.qty - 1 })
													);
												}
											}}
										>
											-
										</span>
										<input
											value={item.qty}
											onChange={() => undefined}
											disabled
										/>
										<span
											className={`qty-increase ${
												item.qty < 99 ? '' : 'disabled'
											}`}
											onClick={() => {
												if (item.qty < 99) {
													dispatch(
														updateQty({ id: item.id, qty: item.qty + 1 })
													);
												}
											}}
										>
											+
										</span>
									</div>
								</div>
								<div className="actions">
									<span
										className="action"
										onClick={() => dispatch(removeFromCart({ ...item }))}
									>
										{t('Delete')}
									</span>
									<span className="action">{t('Buy later')}</span>
									<span className="price">{toCurrency(item.price)}</span>
								</div>
							</FormGroup>
						))
					) : (
						<p>Empty</p>
					)}
				</div>
				<div className="cart-summary">
					<FormGroup>
						<label>{t('Subtotal')}</label>
						<span className="price">{toCurrency(cartSubtotal)}</span>
					</FormGroup>

					<FormGroup>
						<label>{t('Delivery fee')}</label>
						<span className="price">{toCurrency(getDeliveryFee)}</span>
					</FormGroup>

					<FormGroup>
						<label>{t('Total')}</label>
						<span className="price total-price">
							{toCurrency(cartSubtotal + getDeliveryFee)}
						</span>
					</FormGroup>
				</div>
			</div>

			<Form className="cart-main">
				<div className="checkout-information">
					<h3 className="title">{t('Order information')}</h3>

					<FormGroup>
						<Input
							defaultValue={userInfo.fullName}
							placeholder={t('Fullname')}
						/>
					</FormGroup>

					<FormGroup>
						<Input defaultValue={userInfo.phone} placeholder={t('Phone')} />
					</FormGroup>

					<FormGroup>
						<Input
							defaultValue={userInfo.email}
							placeholder={t('Email address')}
						/>
					</FormGroup>

					<FormGroup>
						<Input defaultValue={userInfo.address} placeholder={t('Address')} />
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
					<Button shadow as={cartItems.length ? 'button' : 'div'}>
						{t('Checkout')}
					</Button>
				</FormGroup>
			</Form>
		</CartStyled>
	);
};

export default Cart;
