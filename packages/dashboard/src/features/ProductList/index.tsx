import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { Table, Image, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getProducts, getProductsAction } from '../../redux/reducers/product';
import { IImage, IProduct, IProductUnit } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';
import { toCurrency } from '../../utils/formatter';
import { PATH_NAME } from '../../configs';

const columns: ColumnsType<IProduct> = [
	{
		title: 'Image',
		dataIndex: 'images',
		key: 'images',
		render: (images?: IImage[]) => {
			return <Image width={80} src={images ? images[0]?.url : ''} />;
		},
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
		render: (unit?: IProductUnit) => unit?.name,
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		render: (status: ProductStatus) => (
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
		render: (_: any, product: IProduct) => (
			<Space size="middle">
				<Link to={`${PATH_NAME.PRODUCT_LIST}/${product.id}/edit`}>Edit</Link>
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
