import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Root from './MyOrder';
import { getOrdersAction, getOrders } from '../../redux/reducers/order';
import { isoDateToNativeDate, toCurrency } from '../../utils/formatter';

const MyOrder = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const orders = useSelector(getOrders());

	useEffect(() => {
		dispatch(getOrdersAction());
	}, []);

	return (
		<Root>
			<table className="order-list">
				<thead>
					<tr>
						<th>{t('Order Id')}</th>
						<th>{t('Order Date')}</th>
						<th>{t('Products')}</th>
						<th>{t('Total')}</th>
						<th>{t('Order Status')}</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>{isoDateToNativeDate(order.orderDate)}</td>
							<td>{order.items.map((item) => item.product.name).join(', ')}</td>
							<td>
								{toCurrency(
									order.items.reduce(
										(total, item) => total + item.price * item.qty,
										0
									)
								)}
							</td>
							<td>{order.orderStatus}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Root>
	);
};

export default MyOrder;
