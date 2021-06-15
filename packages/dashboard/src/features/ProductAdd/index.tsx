import { Form, Input, InputNumber, Button, Select, Switch } from 'antd';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createProductAction } from '../../redux/reducers/product';
import {
	getProductUnits,
	getProductUnitsAction,
} from '../../redux/reducers/productUnit';

import {
	PATH_NAME,
	formLayout as layout,
	formTailLayout as tailLayout,
} from '../../configs';
import { IProductCreate } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';

import UploadImage from '../../components/UploadImage';

const { Option } = Select;

const ProductAdd = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const productUnits = useSelector(getProductUnits());
	const [isUploaded, setIsUploaded] = useState(true);

	const normFile = (fileList: any[]) => {
		console.log('Upload event:', JSON.parse(JSON.stringify(fileList)));
		return fileList.map((file) => ({
			url: file.response?.url || file.url || '',
			publicId: file.response?.publicId,
		}));
	};

	const onFinish = async (values: any) => {
		if (!isUploaded) {
			toast.error('Wait for upload images to complete');
			return;
		}

		const productCreate: IProductCreate = {
			name: values.name,
			price: Number(values.price),
			unitId: values.unit,
			description: values.description,
			images: values.images,
			status: values.status ? ProductStatus.SELLING : ProductStatus.NOT_SELLING,
		};

		try {
			await dispatch(createProductAction(productCreate));
			history.push(PATH_NAME.PRODUCT_LIST);
			toast.success('success');
		} catch (err) {
			toast.error(err?.message || 'error');
		}
	};

	useEffect(() => {
		dispatch(getProductUnitsAction());
	}, [dispatch]);

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
					{[...productUnits]
						.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
						.map((unit) => (
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
