import { Button, Table, Image, Tag, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  getProducts,
  getProductsAction,
  getTotal,
  updateProductStatusAction
} from '../../redux/reducers/product';

import { PATH_NAME } from '../../configs';
import { IImage, IProduct, IProductUnit } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';
import { toCurrency } from '../../utils/formatter';

const getColumnsConfig = ({
  updateProductStatus
}: {
  updateProductStatus: Function;
}): ColumnsType<IProduct> => [
  {
    title: 'Image',
    dataIndex: 'images',
    key: 'images',
    render: (images?: IImage[]) => {
      return <Image width={80} src={images ? images[0]?.url : ''} />;
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a href="/">{text}</a>,
    sorter: (a: IProduct, b: IProduct) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    }
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text: number) => toCurrency(text),
    sorter: (a: IProduct, b: IProduct) => a.price - b.price
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
    render: (unit?: IProductUnit) => unit?.name
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: ProductStatus) => (
      <Tag color={status ? 'geekblue' : 'green'}>{status}</Tag>
    ),
    sorter: (a: IProduct, b: IProduct) => {
      if (a.status > b.status) {
        return 1;
      } else if (a.status < b.status) {
        return -1;
      } else {
        return 0;
      }
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, product: IProduct) => (
      <Space size="middle">
        <Link to={`${PATH_NAME.PRODUCT_LIST}/${product.id}/edit`}>Edit</Link>
        <Button
          type="link"
          onClick={() =>
            updateProductStatus(
              product.id,
              product.status === ProductStatus.SELLING
                ? ProductStatus.NOT_SELLING
                : ProductStatus.SELLING
            )
          }
        >
          {product.status === ProductStatus.SELLING ? 'Unsell' : 'Sell'}
        </Button>
      </Space>
    )
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const products = useSelector(getProducts(page));
  const total = useSelector(getTotal());

  const updateProductStatus = async (id: string, newStatus: ProductStatus) => {
    try {
      await dispatch(updateProductStatusAction(id, newStatus));
      toast.success('success');
    } catch (err) {
      toast.error(err?.message || 'error');
    }
  };

  const onPaginationChange = (page: number, pageSize?: number) => {
    setPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  useEffect(() => {
    dispatch(getProductsAction(page, pageSize));
  }, [dispatch, page, pageSize]);

  return (
    <Table
      columns={getColumnsConfig({ updateProductStatus })}
      dataSource={products}
      rowKey={record => record.id}
      pagination={{
        defaultPageSize: 1,
        pageSize: pageSize,
        total: total,
        onChange: onPaginationChange
      }}
    />
  );
};

export default ProductList;
