import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  getOrders,
  getOrdersAction,
  payOrderAction,
  updateOrderStatusAction
} from '../../redux/reducers/order';
import { IOrder, IOrderItem, IUser } from '../../interfaces';
import { isoDateToNativeDate, toCurrency } from '../../utils/formatter';
import { PATH_NAME } from '../../configs';
import { OrderStatus, PaymentStatus } from '../../interfaces/enum';

const renderActionSwitch = (order: IOrder, updateStatus: Function) => {
  switch (order.orderStatus) {
    case OrderStatus.ORDERED:
      return (
        <Button
          type="link"
          onClick={() => updateStatus(order.id, OrderStatus.VERIFIED)}
        >
          Verify
        </Button>
      );
    case OrderStatus.VERIFIED:
      return (
        <Button
          type="link"
          onClick={() => updateStatus(order.id, OrderStatus.DELIVERING)}
        >
          Delivering
        </Button>
      );
    case OrderStatus.DELIVERING:
      return (
        <Button
          type="link"
          onClick={() => updateStatus(order.id, OrderStatus.DELIVERED)}
        >
          Delivered
        </Button>
      );
    default:
      return '';
  }
};

const renderOrderStatus = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.CANCEL:
      return <Tag color="error">{status}</Tag>;
    case OrderStatus.DELIVERED:
      return <Tag color="green">{status}</Tag>;
    case OrderStatus.DELIVERING:
      return <Tag color="blue">{status}</Tag>;
    case OrderStatus.ORDERED:
      return <Tag color="orange">{status}</Tag>;
    case OrderStatus.VERIFIED:
      return <Tag color="cyan">{status}</Tag>;
    default:
      return null;
  }
};

const getColumnsConfig = (
  updateStatus: Function,
  updatePaymentStatus: Function
): ColumnsType<IOrder> => [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: (user?: IUser) => user?.fullName
  },
  {
    title: 'Delivery Fullname',
    dataIndex: 'deliveryFullName',
    key: 'deliveryFullName',
    sorter: (a: IOrder, b: IOrder) => {
      if (a.deliveryFullName > b.deliveryFullName) {
        return 1;
      } else if (a.deliveryFullName < b.deliveryFullName) {
        return -1;
      } else {
        return 0;
      }
    }
  },
  {
    title: 'Delivery Phone',
    dataIndex: 'deliveryPhone',
    key: 'deliveryPhone'
  },
  {
    title: 'Delivery Address',
    dataIndex: 'deliveryAddress',
    key: 'deliveryAddress'
  },
  {
    title: 'Total',
    dataIndex: 'items',
    key: 'items',
    render: (items: IOrderItem[]) => {
      const total = items.reduce(
        (result, item) => result + item.price * item.qty,
        0
      );
      return <>{toCurrency(total)}</>;
    }
  },
  {
    title: 'Ordered Date',
    dataIndex: 'orderDate',
    key: 'orderDate',
    render: (date: number) => <>{isoDateToNativeDate(date)}</>,
    sorter: (a: IOrder, b: IOrder) => {
      return new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime();
    }
  },
  {
    title: 'Payment Status',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
    render: (status: PaymentStatus) => (
      <Tag color={status === PaymentStatus.UNPAID ? 'geekblue' : 'green'}>
        {status}
      </Tag>
    ),
    sorter: (a: IOrder, b: IOrder) => {
      if (a.paymentStatus > b.paymentStatus) {
        return 1;
      } else if (a.paymentStatus < b.paymentStatus) {
        return -1;
      } else {
        return 0;
      }
    }
  },
  {
    title: 'Status',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    render: (status: OrderStatus) => renderOrderStatus(status),
    sorter: (a: IOrder, b: IOrder) => {
      if (a.orderStatus > b.orderStatus) {
        return 1;
      } else if (a.orderStatus < b.orderStatus) {
        return -1;
      } else {
        return 0;
      }
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, order: IOrder) => (
      <Space size="small">
        <Link to={`${PATH_NAME.ORDER_LIST}/${order.id}`}>View</Link>
        {order.paymentStatus === PaymentStatus.UNPAID && (
          <Button type="link" onClick={() => updatePaymentStatus(order.id)}>
            Pay
          </Button>
        )}

        {renderActionSwitch(order, updateStatus)}
      </Space>
    )
  }
];

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders());

  const updateStatus = async (id: string, status: OrderStatus) => {
    try {
      await dispatch(updateOrderStatusAction(id, status));
      notification.success({ message: 'Success' });
    } catch (err) {
      notification.error({ message: err?.message || 'error' });
    }
  };

  const payOrder = async (id: string) => {
    try {
      await dispatch(payOrderAction(id));
      notification.success({ message: 'Success' });
    } catch (err) {
      notification.error({ message: err?.message || 'error' });
    }
  };

  useEffect(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  return (
    <Table
      columns={getColumnsConfig(updateStatus, payOrder)}
      dataSource={orders}
      rowKey={record => record.id}
    />
  );
};

export default OrderList;
