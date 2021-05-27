import { Form, Input, InputNumber, Button, Select } from 'antd';
import UploadImage from '../../components/UploadImage';

import './ProductAdd.css';

const { Option } = Select;

const ProductAdd = () => {
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const onFinish = (values: any) => {
		console.log('submit', values);
	};

	return (
		<Form {...layout} className="form" onFinish={onFinish}>
			<Form.Item label="Name" name="name">
				<Input />
			</Form.Item>
			<Form.Item label="Price" name="price">
				<InputNumber min={1} />
			</Form.Item>
			<Form.Item label="Unit" name="unit">
				<Select>
					<Option value="kg">kg</Option>
					<Option value="kg">kg</Option>
					<Option value="kg">kg</Option>
				</Select>
			</Form.Item>
			<Form.Item label="Description" name="description">
				<Input.TextArea />
			</Form.Item>
			<Form.Item label="Images" name="images">
				<UploadImage />
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ProductAdd;
