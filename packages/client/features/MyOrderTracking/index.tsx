import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { getLoading } from '../../redux/reducers/app';
import { getTrackingAction } from '../../redux/reducers/order';
import Loading from '../../components/Loading';

const MyOrderTracking = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const orderId = router.query.id;
  const isLoading = useSelector(getLoading());

  useEffect(() => {
    dispatch(getTrackingAction(orderId as string));
  }, [orderId]);

  if (isLoading) {
    return <Loading />;
  }

  return <></>;
};

export default MyOrderTracking;
