import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';

const ProductDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<MainLayout>
			<div>Product Detail Page</div>
			<div>Product Id: {id}</div>
		</MainLayout>
	);
};

export default ProductDetailPage;
