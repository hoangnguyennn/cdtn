import { Form, Input, InputNumber, Button, Select, Switch } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadImage from '../../components/UploadImage';
import { IProductCreate } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';
import { createProductAction } from '../../redux/reducers/product';
import {
	fetchProductUnitsAction,
	getProductUnits,
} from '../../redux/reducers/productUnit';

import './ProductAdd.css';

const { Option } = Select;

const ProductAdd = () => {
	const dispatch = useDispatch();
	const productUnits = useSelector(getProductUnits);

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const normFile = (fileList: any[]) => {
		console.log('Upload event:', JSON.parse(JSON.stringify(fileList)));
		return fileList.map((file) => file?.response?.url || '');
	};

	const onFinish = async (values: any) => {
		console.log('submit', values);
		const productCreate: IProductCreate = {
			name: values.name,
			price: values.price,
			unitId: values.unit,
			description: values.description,
			imagesUrl: values.images,
			status: values.status ? ProductStatus.SELLING : ProductStatus.NOT_SELLING,
		};

		await dispatch(createProductAction(productCreate));
	};

	useEffect(() => {
		dispatch(fetchProductUnitsAction());
	}, [dispatch]);

	return (
		<Form {...layout} className="form" onFinish={onFinish}>
			<Form.Item label="Is selling" name="status" valuePropName="checked">
				<Switch defaultChecked />
			</Form.Item>
			<Form.Item
				label="Name"
				name="name"
				rules={[{ required: true, message: 'Please input product name!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Price"
				name="price"
				rules={[{ required: true, message: 'Please input product price!' }]}
			>
				<InputNumber min={1} />
			</Form.Item>
			<Form.Item
				label="Unit"
				name="unit"
				rules={[{ required: true, message: 'Please select product unit!' }]}
			>
				<Select>
					{productUnits.map((unit) => (
						<Option key={unit.id} value={unit.id}>
							{unit.name}
						</Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item label="Description" name="description">
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				label="Images"
				name="images"
				rules={[{ required: true, message: 'Please upload product images!' }]}
				valuePropName="fileList"
				getValueFromEvent={normFile}
			>
				<UploadImage onChange={normFile} />
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
