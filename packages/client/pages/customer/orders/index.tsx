import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { myOrderPage } from '../../../configs/breadcrumb';
import i18n from '../../../locales';
import MainLayout from '../../../layouts/MainLayout';
import MyOrder from '../../../features/MyOrder';
import PageContent from '../../../components/PageContent';

const MyOrderPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={myOrderPage()} title={t('My orders')}>
        <MyOrder />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { title: i18n.t('My orders') }
  };
};

export default MyOrderPage;
