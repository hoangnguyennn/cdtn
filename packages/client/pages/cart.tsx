import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { cartPage } from '../configs/breadcrumb';
import Cart from '../features/Cart';
import i18n from '../locales';
import MainLayout from '../layouts/MainLayout';
import PageContent from '../components/PageContent';

const CartPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={cartPage()} title={t('Cart')}>
        <Cart />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { title: i18n.t('Cart') }
  };
};

export default CartPage;
