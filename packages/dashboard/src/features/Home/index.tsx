import { Col, Row, Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import { PATH_NAME } from '../../configs';
import { IUser, IOrder, IOrderItem } from '../../interfaces';
import { PaymentStatus, ProductStatus } from '../../interfaces/enum';
import {
	getOrdersUnProcessed,
	getOrdersUnProcessedAction,
} from '../../redux/reducers/order';
import { toCurrency, isoDateToNativeDate } from '../../utils/formatter';

import './Home.css';
import {
	getStatistics,
	getStatisticsAction,
} from '../../redux/reducers/statistics';

const columns = [
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

const Home = () => {
	const dispatch = useDispatch();
	const ordersUnProcessed = useSelector(getOrdersUnProcessed());
	const statistics = useSelector(getStatistics());

	useEffect(() => {
		dispatch(getOrdersUnProcessedAction());
		dispatch(getStatisticsAction());
	}, [dispatch]);

	return (
		<>
			<Row gutter={32} className="dashboard-top">
				<Col span={8}>
					<div className="box">
						<h2>Revenue</h2>
						<div className="number">
							{statistics.revenueOfTheDay < statistics.revenueOfPreviousDay ? (
								<ArrowDownOutlined />
							) : (
								<ArrowUpOutlined />
							)}
							{toCurrency(statistics.revenueOfTheDay)}
						</div>
					</div>
				</Col>
				<Col span={8}>
					<div className="box">
						<h2>Number of orders</h2>
						<div className="number">
							{statistics.numberOfOrders <
							statistics.numberOfOrdersOfPreviousDay ? (
								<ArrowDownOutlined />
							) : (
								<ArrowUpOutlined />
							)}
							{statistics.numberOfOrders}
						</div>
					</div>
				</Col>
				<Col span={8}>
					<div className="box"></div>
				</Col>
			</Row>
			<div className="unprocessed-orders">
				<h2>Unprocessed orders ({ordersUnProcessed.length})</h2>
				<Table
					columns={columns}
					dataSource={ordersUnProcessed}
					rowKey={(record) => record.id}
				/>
			</div>
		</>
	);
};

export default Home;
