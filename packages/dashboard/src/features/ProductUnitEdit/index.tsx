import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
	fetchProductUnitByIdAction,
	getProductUnit,
	updateProductUnitAction,
} from '../../redux/reducers/productUnit';
import { PATH_NAME } from '../../configs';

const ProductUnitEdit = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const history = useHistory();
	const productUnit = useSelector(getProductUnit(id));

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const onFinish = async (values: any) => {
		try {
			await dispatch(updateProductUnitAction(id, values));
			history.push(PATH_NAME.PRODUCT_UNIT_LIST);
		} catch {}
	};

	useEffect(() => {
		if (!productUnit) {
			dispatch(fetchProductUnitByIdAction(id));
		}
	}, [dispatch, id, productUnit]);

	return (
		<Form
			{...layout}
			className="form"
			onFinish={onFinish}
			initialValues={productUnit}
		>
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

export default ProductUnitEdit;
