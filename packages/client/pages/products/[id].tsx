// import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import PageTitle from '../../components/PageTitle';
import ProductDetail from '../../components/Product/Detail';

const ProductDetailPage = () => {
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<MainLayout>
			<PageTitle />
			<ProductDetail />
		</MainLayout>
	);
};

export default ProductDetailPage;
