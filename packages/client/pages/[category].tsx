import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
	fetchProductsByCategorySlugAction,
	getProductsByCategorySlug,
} from '../redux/reducers/product';
import {
	getCategoriesAction,
	getCategoryBySlug,
} from '../redux/reducers/category';
import { initialStore } from '../redux/store';
import { productsByCategoryPage } from '../configs/breadcrumb';
import MainLayout from '../layouts/MainLayout';
import PageContent from '../components/PageContent';
import ProductList from '../features/ProductList';

const CategoryPage = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const { category } = router.query;

	const products = useSelector(getProductsByCategorySlug(category as string));
	const categoryInfo = useSelector(getCategoryBySlug(category as string));

	return (
		<MainLayout>
			<PageContent
				breadcrumb={productsByCategoryPage(categoryInfo)}
				title={t(categoryInfo?.name || 'Products')}
			>
				<ProductList
					title={t(categoryInfo?.name || 'Products')}
					products={products}
				/>
			</PageContent>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { category } = context.query;

	const reduxStore = initialStore();
	const { dispatch } = reduxStore;

	const query = context.query;
	try {
		await dispatch(
			fetchProductsByCategorySlugAction(category as string, query)
		);
		await dispatch(getCategoriesAction());

		return {
			props: { initialReduxState: reduxStore.getState() },
		};
	} catch (err) {
		console.log(err);

		return {
			notFound: true,
		};
	}
};

export default CategoryPage;
