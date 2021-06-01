import { ColumnsType } from 'antd/lib/table';
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
	fetchProductUnitsAction,
	getProductUnits,
} from '../../redux/reducers/productUnit';
import { IProductUnit } from '../../interfaces';

const columns: ColumnsType<IProductUnit> = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		sorter: (a: IProductUnit, b: IProductUnit) => {
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
		title: 'Action',
		key: 'action',
		render: () => (
			<Space size="middle">
				<a href="/">Edit</a>
			</Space>
		),
	},
];

const ProductUnitList = () => {
	const dispatch = useDispatch();
	const productUnits = useSelector(getProductUnits);

	useEffect(() => {
		dispatch(fetchProductUnitsAction());
	}, [dispatch]);

	return (
		<Table
			columns={columns}
			dataSource={productUnits}
			rowKey={(record) => record.id}
		/>
	);
};

export default ProductUnitList;
