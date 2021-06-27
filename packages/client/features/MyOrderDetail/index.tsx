import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { getOrderById, getOrdersAction } from '../../redux/reducers/order';
import { imageUrlToSpecificSize } from '../../utils/converter';
import { isoDateToNativeDate, toCurrency } from '../../utils/formatter';
import { orderStatus } from '../../constants';
import { PATH_NAME } from '../../configs/pathName';
import Root from './MyOrderDetail';

const MyOrderDetail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const thumbnailRef = useRef<HTMLDivElement | null>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const { id } = router.query;
  const order = useSelector(getOrderById(id as string));
  const items = order?.items;

  useEffect(() => {
    dispatch(getOrdersAction());
  }, []);

  useEffect(() => {
    const thumbnail = thumbnailRef.current;
    if (thumbnail) {
      setImgSize({
        width: thumbnail.offsetWidth,
        height: thumbnail.offsetWidth
      });
    }
  }, [thumbnailRef.current]);

  if (!items) {
    return null;
  }

  return (
    <Root>
      <div className="info">
        <div className="info-item">
          <div className="content">
            <p className="order-status">
              {t('Order status')}: <b>{t(orderStatus[order.orderStatus])}</b>
            </p>

            <p className="order-date">
              {t('Order date')}:{' '}
              <b>{isoDateToNativeDate(order.orderDate, true)}</b>
            </p>

            {order.deliveryDate && (
              <p className="delivery-date">
                {t('Delivery date')}:{' '}
                <b>{isoDateToNativeDate(order.deliveryDate, true)}</b>
              </p>
            )}
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>{t('Products')}</th>
            <th>{t('Price')}</th>
            <th>{t('Quantity')}</th>
            <th>{t('Promotion')}</th>
            <th>{t('Subtotal')}</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map(item => (
              <tr key={item.id}>
                <td>
                  <div ref={thumbnailRef}>
                    <img
                      src={imageUrlToSpecificSize(
                        item.product.image,
                        imgSize.width,
                        imgSize.height
                      )}
                      alt={item.product.name}
                      loading="lazy"
                    />
                    <div className="product-info">
                      <Link href={`${PATH_NAME.PRODUCTS}/${item.productId}`}>
                        <a>{item.product.name}</a>
                      </Link>
                      <div className="actions">
                        <span>{t('Leave a comment')}</span>
                        <span>{t('Repurchase')}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{toCurrency(item.price)}</td>
                <td>{item.qty}</td>
                <td>{toCurrency(0)}</td>
                <td>{toCurrency(item.price * item.qty)}</td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>{t('Subtotal')}</td>
            <td className="price">
              {toCurrency(
                items.reduce((total, item) => total + item.price * item.qty, 0)
              )}
            </td>
          </tr>
          <tr>
            <td colSpan={4}>{t('Delivery fee')}</td>
            <td className="price">{t('Free')}</td>
          </tr>
          <tr>
            <td colSpan={4}>{t('Total')}</td>
            <td className="price total-price">
              {toCurrency(
                items.reduce((total, item) => total + item.price * item.qty, 0)
              )}
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="info">
        <div className="info-item">
          <div className="title">
            <b>{t('Delivery information')}</b>
          </div>
          <div className="content">
            <p className="name">
              {t('Delivery name')}: <b>{order.deliveryFullName}</b>
            </p>
            <p className="address">
              {t('Delivery address')}: <b>{order.deliveryAddress}</b>
            </p>
            <p className="phone">
              {t('Delivery phone')}: <b>{order.deliveryPhone}</b>
            </p>
            <p className="payment-method">
              {t('Payment method')}: <b>{order.paymentMethod.name}</b>
            </p>
          </div>
        </div>
      </div>
      <Link href={PATH_NAME.MY_ORDER}>
        <a className="back-to-my-orders">{t('Back to my orders')}</a>
      </Link>
    </Root>
  );
};

export default MyOrderDetail;
