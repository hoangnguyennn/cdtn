import { Form, Input, Button, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createProductUnitAction } from '../../redux/reducers/productUnit';
import {
  PATH_NAME,
  formLayout as layout,
  formTailLayout as tailLayout
} from '../../configs';

const ProductUnitAdd = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async (values: any) => {
    try {
      await dispatch(createProductUnitAction(values));
      history.push(PATH_NAME.PRODUCT_UNIT_LIST);
      notification.success({ message: 'Success' });
    } catch (err) {
      notification.error({ message: err?.message || 'error' });
    }
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
