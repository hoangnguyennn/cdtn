import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

import {
	fetchProductByIdAction,
	getProduct,
} from '../../redux/reducers/product';

import { initialStore } from '../../redux/store';
import { productPage } from '../../configs/breadcrumb';
import MainLayout from '../../layouts/MainLayout';
import PageContent from '../../components/PageContent';
import ProductSummary from '../../features/ProductSummary';

const ProductDetailPage = () => {
	const product = useSelector(getProduct);

	return (
		<MainLayout>
			<PageContent
				breadcrumb={productPage(product.name, product.id as string)}
				title={product.name}
			>
				<ProductSummary product={product} />
			</PageContent>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;

	const reduxStore = initialStore();
	const { dispatch } = reduxStore;

	await dispatch(fetchProductByIdAction(id as string));

	return {
		props: { initialReduxState: reduxStore.getState() },
	};
};

export default ProductDetailPage;
