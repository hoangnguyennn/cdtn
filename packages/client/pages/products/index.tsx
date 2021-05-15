import { useTranslation } from 'react-i18next';
import MainLayout from '../../layouts/MainLayout';
import PageTitle from '../../components/PageTitle';
import { productsPage } from '../../configs/breadcrumb';
import ProductList from '../../features/ProductList';

const ProductDetailPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<PageTitle breadcrumb={productsPage()} title={t('Products')} />
			<ProductList />
		</MainLayout>
	);
};

export default ProductDetailPage;
