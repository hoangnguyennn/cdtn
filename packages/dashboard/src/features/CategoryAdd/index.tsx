import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
	formLayout as layout,
	formTailLayout as tailLayout,
	PATH_NAME,
} from '../../configs';
import { ICategoryCreate } from '../../interfaces';
import { createCategoryAction } from '../../redux/reducers/category';

const CategoryAdd = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const onFinish = async (values: any) => {
		const categoryCreate: ICategoryCreate = {
			name: values.name,
			slug: values.slug,
		};

		try {
			await dispatch(createCategoryAction(categoryCreate));
			history.push(PATH_NAME.CATEGORY_LIST);
			toast.success('success');
		} catch (err) {
			toast.error(err?.message || 'error');
		}
	};

	return (
		<Form {...layout} className="form" onFinish={onFinish}>
			<Form.Item
				label="Name"
				name="name"
				rules={[{ required: true, message: 'Please input category name!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Slug"
				name="slug"
				rules={[{ required: true, message: 'Please input category slug!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CategoryAdd;
