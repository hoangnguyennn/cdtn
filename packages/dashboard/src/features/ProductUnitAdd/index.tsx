import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { createProductUnitAction } from '../../redux/reducers/productUnit';
import { PATH_NAME } from '../../configs';

const ProductUnitAdd = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const onFinish = async (values: any) => {
		await dispatch(createProductUnitAction(values));
		history.push(PATH_NAME.PRODUCT_UNIT_LIST);
	};

	return (
		<Form {...layout} className="form" onFinish={onFinish}>
			<Form.Item
				label="Name"
				name="name"
				rules={[{ required: true, message: 'Please input product unit name!' }]}
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

export default ProductUnitAdd;
