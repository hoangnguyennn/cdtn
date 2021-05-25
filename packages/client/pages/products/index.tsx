import { useTranslation } from 'react-i18next';

import { productsPage } from '../../configs/breadcrumb';
import MainLayout from '../../layouts/MainLayout';
import PageContent from '../../components/PageContent';
import ProductList from '../../features/ProductList';

const ProductDetailPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageContent
				breadcrumb={productsPage()}
				title={t('Products')}
			></PageContent>
			<ProductList />
		</MainLayout>
	);
};

export default ProductDetailPage;
