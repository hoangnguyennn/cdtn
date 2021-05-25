import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import classNames from 'classnames';

import { toCurrency } from '../../utils/formatter';
import Button from '../../components/core/Button';
import CartStyled from './Cart';
import Form from '../../components/core/Form';
import FormGroup from '../../components/core/FormGroup';
import Input from '../../components/core/Input';
import Invalid from '../../components/core/Invalid';

import {
	getCartItems,
	getCartSubtotal,
	getDeliveryFee,
	orderAction,
	removeFromCart,
	updateQty,
} from '../../redux/reducers/cart.reducer';
import { getUserInfo } from '../../redux/reducers/auth.reducer';
import { IOrder, IOrderRequest } from '../../interfaces';

import {
	fetchPaymentMethodsAction,
	getPaymentMethods,
} from '../../redux/reducers/paymentMethods.reducer';
import Link from 'next/link';
import { PATH_NAME } from '../../configs/pathName';

const Cart = () => {
	const { t } = useTranslation();
	const [isValid, setIsValid] = useState(false);

	const cartItems = useSelector(getCartItems);
	const cartSubtotal = useSelector(getCartSubtotal);
	const userInfo = useSelector(getUserInfo);
	const paymentMethods = useSelector(getPaymentMethods);

	const dispatch = useDispatch();

	const [initialValues, setInitialValues] = useState<IOrder>({
		fullName: '',
		phone: '',
		email: '',
		address: '',
		note: '',
		paymentMethod: '',
	});

	const validationSchema = Yup.object({
		fullName: Yup.string().required(),
		phone: Yup.string().required(),
		email: Yup.string().email().required(),
		address: Yup.string().required(),
		note: Yup.string(),
	});

	const handleFormSubmit = (values: IOrder, { setSubmitting }) => {
		const orderRequest: IOrderRequest = {
			userId: userInfo.id || undefined,
			deliveryFullName: values.fullName,
			deliveryPhone: values.phone,
			deliveryEmail: values.email,
			deliveryAddress: values.address,
			paymentMethodId: values.paymentMethod,
			items: cartItems.map((item) => ({
				productId: item.id,
				qty: item.qty,
			})),
		};

		dispatch(orderAction(orderRequest));
		setSubmitting(false);
	};

	const formik = useFormik({
		initialValues,
		enableReinitialize: true,
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: handleFormSubmit,
	});

	useEffect(() => {
		setIsValid(cartItems.length !== 0);
	}, [cartItems.length]);

	useEffect(() => {
		dispatch(fetchPaymentMethodsAction());
	}, []);

	useEffect(() => {
		setInitialValues((prevState) => ({
			...prevState,
			fullName: userInfo.fullName || '',
			phone: userInfo.phone || '',
			email: userInfo.email || '',
			address: userInfo.address || '',
		}));
	}, [userInfo]);

	useEffect(() => {
		if (paymentMethods.length) {
			setInitialValues((prevState) => ({
				...prevState,
				paymentMethod: paymentMethods[0].id,
			}));
		}
	}, [paymentMethods]);

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
									<Link href={`${PATH_NAME.PRODUCTS}/${item.id}`}>
										<a className="name">{item.name}</a>
									</Link>
									<div className="qty">
										<span
											className={classNames({
												'qty-decreace': true,
												disabled: item.qty <= 1,
											})}
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
											className={classNames({
												'qty-increase': true,
												disabled: item.qty >= 99,
											})}
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
						<span className="price">
							{getDeliveryFee ? toCurrency(getDeliveryFee) : t('Free')}
						</span>
					</FormGroup>

					<FormGroup>
						<label>{t('Total')}</label>
						<span className="price total-price">
							{toCurrency(cartSubtotal + getDeliveryFee)}
						</span>
					</FormGroup>
				</div>
			</div>

			<Form className="cart-main" onSubmit={formik.handleSubmit}>
				<div className="checkout-information">
					<h3 className="title">{t('Order information')}</h3>

					<FormGroup>
						<Input
							placeholder={t('Fullname')}
							name="fullName"
							required
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.fullName}
						/>
						{formik.errors.fullName ? (
							<Invalid>{formik.errors.fullName}</Invalid>
						) : null}
					</FormGroup>

					<FormGroup>
						<Input
							placeholder={t('Phone')}
							name="phone"
							required
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.phone}
						/>
						{formik.errors.phone ? (
							<Invalid>{formik.errors.phone}</Invalid>
						) : null}
					</FormGroup>

					<FormGroup>
						<Input
							placeholder={t('Email address')}
							name="email"
							required
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.errors.email ? (
							<Invalid>{formik.errors.email}</Invalid>
						) : null}
					</FormGroup>

					<FormGroup>
						<Input
							placeholder={t('Address')}
							name="address"
							required
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.address}
						/>
						{formik.errors.address ? (
							<Invalid>{formik.errors.address}</Invalid>
						) : null}
					</FormGroup>

					<FormGroup>
						<Input
							placeholder={t('Note')}
							name="note"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.note}
						/>
					</FormGroup>
				</div>

				<div className="payment-methods">
					<h3 className="title">{t('Payment method')}</h3>

					{paymentMethods.map((method) => (
						<FormGroup
							as="label"
							className={classNames({
								'payment-method': true,
								active: formik.values.paymentMethod === method.id,
							})}
							key={method.id}
						>
							<input
								type="radio"
								value={method.id}
								name="paymentMethod"
								checked={formik.values.paymentMethod === method.id}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className="icon czi-check-circle"></div>
							<div>
								<h4>{t(method.name)}</h4>
							</div>
						</FormGroup>
					))}
				</div>

				<FormGroup>
					{isValid ? (
						<Button shadow type="submit" disabled={!isValid}>
							{t('Checkout')}
						</Button>
					) : (
						<Button shadow as="div">
							{t('Checkout')}
						</Button>
					)}
				</FormGroup>
			</Form>
		</CartStyled>
	);
};

export default Cart;
