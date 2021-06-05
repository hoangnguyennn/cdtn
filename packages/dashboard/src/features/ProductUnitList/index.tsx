import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
	getProductUnitsAction,
	getProductUnits,
} from '../../redux/reducers/productUnit';
import { PATH_NAME } from '../../configs';
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
		render: (_: any, unit: IProductUnit) => (
			<Space size="middle">
				<Link to={`${PATH_NAME.PRODUCT_UNIT_LIST}/${unit.id}/edit`}>Edit</Link>
			</Space>
		),
	},
];

const ProductUnitList = () => {
	const dispatch = useDispatch();
	const productUnits = useSelector(getProductUnits());

	useEffect(() => {
		dispatch(getProductUnitsAction());
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
