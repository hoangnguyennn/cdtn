import { useRouter } from 'next/router';

import { productPage } from '../../configs/breadcrumb';
import MainLayout from '../../layouts/MainLayout';
import PageContent from '../../components/PageContent';
import PageTitle from '../../components/PageTitle';
import ProductSummary from '../../features/ProductSummary';

const ProductDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const title = 'Nấm bào ngư tươi';

	return (
		<MainLayout>
			<PageTitle breadcrumb={productPage(title, id as string)} title={title} />
			<PageContent>
				<ProductSummary />
			</PageContent>
		</MainLayout>
	);
};

export default ProductDetailPage;
