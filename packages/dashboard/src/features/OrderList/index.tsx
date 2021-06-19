import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getOrders, getOrdersAction } from '../../redux/reducers/order';
import { IOrder, IOrderItem, IUser } from '../../interfaces';
import { isoDateToNativeDate, toCurrency } from '../../utils/formatter';
import { PATH_NAME } from '../../configs';
import { PaymentStatus, ProductStatus } from '../../interfaces/enum';

const getColumnsConfig = (): ColumnsType<IOrder> => [
	{
		title: 'User',
		dataIndex: 'user',
		key: 'user',
		render: (user?: IUser) => user?.fullName,
	},
	{
		title: 'Delivery Fullname',
		dataIndex: 'deliveryFullName',
		key: 'deliveryFullName',
		sorter: (a: IOrder, b: IOrder) => {
			if (a.deliveryFullName > b.deliveryFullName) {
				return 1;
			} else if (a.deliveryFullName < b.deliveryFullName) {
				return -1;
			} else {
				return 0;
			}
		},
	},
	{
		title: 'Delivery Phone',
		dataIndex: 'deliveryPhone',
		key: 'deliveryPhone',
	},
	{
		title: 'Delivery Address',
		dataIndex: 'deliveryAddress',
		key: 'deliveryAddress',
	},
	{
		title: 'Total',
		dataIndex: 'items',
		key: 'items',
		render: (items: IOrderItem[]) => {
			const total = items.reduce(
				(result, item) => result + item.price * item.qty,
				0
			);
			return <>{toCurrency(total)}</>;
		},
	},
	{
		title: 'Ordered Date',
		dataIndex: 'orderDate',
		key: 'orderDate',
		render: (date: Date) => <>{isoDateToNativeDate(date)}</>,
		sorter: (a: IOrder, b: IOrder) => {
			return new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime();
		},
	},
	{
		title: 'Payment Status',
		dataIndex: 'paymentStatus',
		key: 'paymentStatus',
		render: (status: PaymentStatus) => (
			<Tag color={status ? 'geekblue' : 'green'}>{status}</Tag>
		),
		sorter: (a: IOrder, b: IOrder) => {
			if (a.paymentStatus > b.paymentStatus) {
				return 1;
			} else if (a.paymentStatus < b.paymentStatus) {
				return -1;
			} else {
				return 0;
			}
		},
	},
	{
		title: 'Status',
		dataIndex: 'orderStatus',
		key: 'orderStatus',
		render: (status: ProductStatus) => (
			<Tag color={status ? 'geekblue' : 'green'}>{status}</Tag>
		),
		sorter: (a: IOrder, b: IOrder) => {
			if (a.orderStatus > b.orderStatus) {
				return 1;
			} else if (a.orderStatus < b.orderStatus) {
				return -1;
			} else {
				return 0;
			}
		},
	},
	{
		title: 'Action',
		key: 'action',
		render: (_: any, order: IOrder) => (
			<Space size="middle">
				<Link to={`${PATH_NAME.ORDER_LIST}/${order.id}`}>View</Link>
			</Space>
		),
	},
];

const OrderList = () => {
	const dispatch = useDispatch();
	const orders = useSelector(getOrders());

	useEffect(() => {
		dispatch(getOrdersAction());
	}, [dispatch]);

	return (
		<Table
			columns={getColumnsConfig()}
			dataSource={orders}
			rowKey={(record) => record.id}
		/>
	);
};

export default OrderList;
