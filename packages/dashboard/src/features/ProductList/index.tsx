import { ColumnsType } from 'antd/lib/table';
import { Table, Image, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getProducts, getProductsAction } from '../../redux/reducers/product';
import { IProduct } from '../../interfaces';
import { ProductStatuses } from '../../interfaces/enum';
import { toCurrency } from '../../utils/formatter';

const columns: ColumnsType<IProduct> = [
	{
		title: 'Image',
		dataIndex: 'images',
		key: 'images',
		render: (images: string[]) => <Image width={80} src={images[0]} />,
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text: string) => <a href="/">{text}</a>,
		sorter: (a: IProduct, b: IProduct) => {
			if (a.name > b.name) {
				return 1;
			} else if (a.name < b.name) {
				return -1;
			} else {
				return 0;
			}
		},
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
		render: (text: number) => toCurrency(text),
		sorter: (a: IProduct, b: IProduct) => a.price - b.price,
	},
	{
		title: 'Unit',
		dataIndex: 'unit',
		key: 'unit',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		render: (status: ProductStatuses) => (
			<Tag color={status ? 'geekblue' : 'green'}>{status}</Tag>
		),
		sorter: (a: IProduct, b: IProduct) => {
			if (a.status > b.status) {
				return 1;
			} else if (a.status < b.status) {
				return -1;
			} else {
				return 0;
			}
		},
	},
	{
		title: 'Action',
		key: 'action',
		render: () => (
			<Space size="middle">
				<a href="/">View</a>
				<a href="/">Edit</a>
				<a href="/">Stop Business</a>
			</Space>
		),
	},
];

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector(getProducts);

	useEffect(() => {
		dispatch(getProductsAction());
	}, [dispatch]);

	return (
		<Table
			columns={columns}
			dataSource={products}
			rowKey={(record) => record.id}
		/>
	);
};

export default ProductList;
