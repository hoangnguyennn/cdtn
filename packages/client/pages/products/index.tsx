import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getProducts, getProductsAction } from '../../redux/reducers/product';
import { initialStore } from '../../redux/store';
import { productsPage } from '../../configs/breadcrumb';
import MainLayout from '../../layouts/MainLayout';
import PageContent from '../../components/PageContent';
import ProductList from '../../features/ProductList';
import { getCategoriesAction } from '../../redux/reducers/category';

const ProductDetailPage = () => {
	const { t } = useTranslation();
	const products = useSelector(getProducts());

	return (
		<MainLayout>
			<PageContent breadcrumb={productsPage()} title={t('Products')}>
				<ProductList products={products} />
			</PageContent>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const reduxStore = initialStore();
	const { dispatch } = reduxStore;

	const query = context.query;
	try {
		await dispatch(getProductsAction(query));
		await dispatch(getCategoriesAction());

		return {
			props: { initialReduxState: reduxStore.getState() },
		};
	} catch {
		return {
			notFound: true,
		};
	}
};

export default ProductDetailPage;
