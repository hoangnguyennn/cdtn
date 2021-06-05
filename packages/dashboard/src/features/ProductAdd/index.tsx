import { Form, Input, InputNumber, Button, Select, Switch } from 'antd';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { createProductAction } from '../../redux/reducers/product';
import {
	getProductUnits,
	getProductUnitsAction,
} from '../../redux/reducers/productUnit';

import { PATH_NAME } from '../../configs';
import { IProductCreate } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';

import UploadImage from '../../components/UploadImage';

const { Option } = Select;

const ProductAdd = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const productUnits = useSelector(getProductUnits());
	const [isUploaded, setIsUploaded] = useState(true);

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
		if (!isUploaded) {
			toast.error('Wait for upload images to complete');
			return;
		}

		console.log(values.status);

		const productCreate: IProductCreate = {
			name: values.name,
			price: values.price,
			unitId: values.unit,
			description: values.description,
			imagesUrl: values.images,
			status: values.status ? ProductStatus.SELLING : ProductStatus.NOT_SELLING,
		};

		await dispatch(createProductAction(productCreate));
		history.push(PATH_NAME.PRODUCT_LIST);
	};

	useEffect(() => {
		if (!productUnits.length) {
			dispatch(getProductUnitsAction());
		}
	}, [dispatch, productUnits]);

	return (
		<Form {...layout} className="form" onFinish={onFinish}>
			<Form.Item
				label="Is selling"
				name="status"
				valuePropName="checked"
				initialValue={true}
			>
				<Switch />
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
				<UploadImage onChange={normFile} setIsUploaded={setIsUploaded} />
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
