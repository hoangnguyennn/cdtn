import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { fetchProductsAction } from '../../redux/reducers/product';
import { initialStore } from '../../redux/store';
import { productsPage } from '../../configs/breadcrumb';
import MainLayout from '../../layouts/MainLayout';
import PageContent from '../../components/PageContent';
import ProductList from '../../features/ProductList';

const ProductDetailPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageContent breadcrumb={productsPage()} title={t('Products')}>
				<ProductList />
			</PageContent>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const reduxStore = initialStore();
	const { dispatch } = reduxStore;

	await dispatch(fetchProductsAction());

	return {
		props: { initialReduxState: reduxStore.getState() },
	};
};

export default ProductDetailPage;
