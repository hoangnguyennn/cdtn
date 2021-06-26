import { Form, Input, InputNumber, Button, Select, Switch } from 'antd';
import { toast } from 'react-toastify';
import { UploadFile } from 'antd/lib/upload/interface';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {
  getProductUnitsAction,
  getProductUnits
} from '../../redux/reducers/productUnit';
import {
  getProduct,
  getProductByIdAction,
  updateProductAction
} from '../../redux/reducers/product';

import {
  PATH_NAME,
  formLayout as layout,
  formTailLayout as tailLayout
} from '../../configs';
import { IImage, IProductUpdate } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';

import UploadImage from '../../components/UploadImage';
import TextEditor from '../../components/TextEditor';
import {
  getCategories,
  gethCategoriesAction
} from '../../redux/reducers/category';

const { Option } = Select;

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();
  const productUnits = useSelector(getProductUnits());
  const categories = useSelector(getCategories());
  const product = useSelector(getProduct(id));
  const [isUploaded, setIsUploaded] = useState(true);

  const [form] = Form.useForm();

  const normFile = (fileList: UploadFile[]) => fileList;

  const handleTextChange = (text: string) => text;

  const onFinish = async (values: any) => {
    if (!isUploaded) {
      toast.error('Wait for upload images to complete');
      return;
    }

    const productUpdate: IProductUpdate = {
      name: values.name,
      price: Number(values.price),
      unitId: values.unit,
      description: values.description,
      images: values.images.map((image: any) => {
        if (image.percent) {
          const img = image as UploadFile;
          return {
            url: img.response?.url || img.url || '',
            publicId: img.response?.publicId
          };
        } else {
          const img = image as IImage & { uid?: string };
          return { id: img.uid || img.id };
        }
      }),
      status: values.status ? ProductStatus.SELLING : ProductStatus.NOT_SELLING,
      categoryId: values.category,
      longDescription: values.longDescription
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
        category: product.category?.id,
        longDescription: product.longDescription
      });
    }
  }, [form, product]);

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
          {[...productUnits]
            .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
            .map(unit => (
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
            .map(category => (
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
        valuePropName="images"
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

export default ProductEdit;
