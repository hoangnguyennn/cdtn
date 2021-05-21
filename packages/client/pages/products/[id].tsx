import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import {
	fetchProductByIdAction,
	getProduct,
} from '../../redux/reducers/product.reducer';

import { productPage } from '../../configs/breadcrumb';
import MainLayout from '../../layouts/MainLayout';
import PageContent from '../../components/PageContent';
import PageTitle from '../../components/PageTitle';
import ProductSummary from '../../features/ProductSummary';

const ProductDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const dispatch = useDispatch();
	const product = useSelector(getProduct);

	useEffect(() => {
		if (id) {
			dispatch(fetchProductByIdAction(id as string));
		}
	}, [id]);

	return (
		<MainLayout>
			<PageTitle
				breadcrumb={productPage(product.name, product.id as string)}
				title={product.name}
			/>
			<PageContent>
				<ProductSummary product={product} />
			</PageContent>
		</MainLayout>
	);
};

export default ProductDetailPage;
