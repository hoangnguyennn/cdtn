import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import PageTitle from '../../components/PageTitle';
import ProductDetail from '../../components/Product/Detail';
import { productPage } from '../../configs/breadcrumb';

const ProductDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const title = 'Nấm bào ngư tươi';

	return (
		<MainLayout>
			<PageTitle breadcrumb={productPage(title, id as string)} title={title} />
			<ProductDetail />
		</MainLayout>
	);
};

export default ProductDetailPage;
