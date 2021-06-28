import { Form, Input, Button, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createCategoryAction } from '../../redux/reducers/category';
import {
  formLayout as layout,
  formTailLayout as tailLayout,
  PATH_NAME
} from '../../configs';
import { ICategoryCreate } from '../../interfaces';

const CategoryAdd = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async (values: any) => {
    const categoryCreate: ICategoryCreate = {
      name: values.name,
      slug: values.slug
    };

    try {
      await dispatch(createCategoryAction(categoryCreate));
      history.push(PATH_NAME.CATEGORY_LIST);
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
