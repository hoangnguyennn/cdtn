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
import {
	getCategories,
	gethCategoriesAction,
} from '../../redux/reducers/category';
import TextEditor from '../../components/TextEditor';

const { Option } = Select;

const ProductAdd = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const productUnits = useSelector(getProductUnits());
	const categories = useSelector(getCategories());
	const [isUploaded, setIsUploaded] = useState(true);

	const normFile = (fileList: any[]) => {
		return fileList.map((file) => ({
			url: file.response?.url || file.url || '',
			publicId: file.response?.publicId,
		}));
	};

	const handleTextChange = (text: string) => text;

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
			categoryId: values.category,
			longDescription: values.longDescription,
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
		if (!productUnits.length) {
			dispatch(getProductUnitsAction());
		}
	}, [dispatch, productUnits]);

	useEffect(() => {
		if (!categories.length) {
			dispatch(gethCategoriesAction());
		}
	}, [dispatch, categories]);

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
			<Form.Item
				label="Category"
				name="category"
				rules={[{ required: true, message: 'Please select category!' }]}
			>
				<Select>
					{[...categories]
						.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
						.map((category) => (
							<Option key={category.id} value={category.id}>
								{category.name}
							</Option>
						))}
				</Select>
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
			<Form.Item label="Description" name="description">
				<TextEditor onChange={handleTextChange} />
			</Form.Item>
			<Form.Item label="Long Description" name="longDescription">
				<TextEditor onChange={handleTextChange} />
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
