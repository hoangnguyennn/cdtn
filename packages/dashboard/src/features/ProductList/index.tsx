import { Table, Image, Tag, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../interfaces';
import { ProductStatuses } from '../../interfaces/enum';
import {
	getProducts,
	getProductsAction,
} from '../../redux/reducers/product.reducer';

const columns: ColumnsType<IProduct> = [
	{
		title: 'Image',
		dataIndex: 'images',
		key: 'images',
		render: (images: string[]) => <Image width={120} src={images[0]} />,
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text: string) => <a href="/">{text}</a>,
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
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
	},
	{
		title: 'Action',
		key: 'action',
		render: () => (
			<Space size="middle">
				<a href="/">View</a>
				<a href="/">Edit</a>
				<a href="/">Delete</a>
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
