import { Form, Input, InputNumber, Button, Select, Switch } from 'antd';
import { toast } from 'react-toastify';
import { UploadFile } from 'antd/lib/upload/interface';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

import {
	getProductUnitsAction,
	getProductUnits,
} from '../../redux/reducers/productUnit';
import {
	getProduct,
	getProductByIdAction,
	updateProductAction,
} from '../../redux/reducers/product';

import { PATH_NAME } from '../../configs';
import { IProductUpdate } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';

import UploadImage from '../../components/UploadImage';

const { Option } = Select;

const ProductEdit = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const history = useHistory();
	const productUnits = useSelector(getProductUnits());
	const product = useSelector(getProduct(id));
	const [isUploaded, setIsUploaded] = useState(true);

	const [form] = Form.useForm();

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const normFile = (fileList: UploadFile[]) => {
		console.log('Upload event:', JSON.parse(JSON.stringify(fileList)));
		return fileList;
	};

	const onFinish = async (values: any) => {
		if (!isUploaded) {
			toast.error('Wait for upload images to complete');
			return;
		}

		const productUpdate: IProductUpdate = {
			name: values.name,
			price: values.price,
			unitId: values.unit,
			description: values.description,
			images: values.images.map((image: UploadFile) => {
				if (image.percent) {
					return {
						url: image.response?.url || image.url || '',
						publicId: image.response?.publicId,
					};
				}

				return { id: image.uid };
			}),
			status: values.status ? ProductStatus.SELLING : ProductStatus.NOT_SELLING,
		};

		try {
			await dispatch(updateProductAction(id, productUpdate));
			history.push(PATH_NAME.PRODUCT_LIST);
			toast.success('success');
		} catch (err) {
			toast.error(err?.message || 'error');
		}
	};

	useEffect(() => {
		const fetchProduct = async () => {
			if (!product) {
				try {
					await dispatch(getProductByIdAction(id));
				} catch {
					history.push(PATH_NAME.PRODUCT_LIST);
				}
			}
		};

		fetchProduct();
	}, [dispatch, product, id, history]);

	useEffect(() => {
		if (product) {
			form.setFieldsValue({
				name: product.name,
				price: product.price,
				unit: product.unit?.id,
				description: product.description,
				images: product.images,
				status: product.status === ProductStatus.SELLING,
			});
		}
	}, [form, product]);

	useEffect(() => {
		if (!productUnits.length) {
			dispatch(getProductUnitsAction());
		}
	}, [dispatch, productUnits]);

	return (
		<Form {...layout} form={form} className="form" onFinish={onFinish}>
			<Form.Item label="Is selling" name="status" valuePropName="checked">
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
				valuePropName="images"
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

export default ProductEdit;
