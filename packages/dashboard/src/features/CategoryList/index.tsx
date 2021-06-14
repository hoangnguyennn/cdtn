import { Table, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
	getCategories,
	gethCategoriesAction,
} from '../../redux/reducers/category';
import { ICategory } from '../../interfaces';
import { PATH_NAME } from '../../configs';

const getColumnsConfig = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text: string) => <a href="/">{text}</a>,
		sorter: (a: ICategory, b: ICategory) => {
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
		title: 'Slug',
		dataIndex: 'slug',
		key: 'slug',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_: any, category: ICategory) => (
			<Space size="middle">
				<Link to={`${PATH_NAME.CATEGORY_LIST}/${category.id}/edit`}>Edit</Link>
			</Space>
		),
	},
];

const CategoryList = () => {
	const categories = useSelector(getCategories());
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(gethCategoriesAction());
	}, [dispatch]);

	return (
		<Table
			columns={getColumnsConfig}
			dataSource={categories}
			rowKey={(record) => record.id}
		/>
	);
};

export default CategoryList;
