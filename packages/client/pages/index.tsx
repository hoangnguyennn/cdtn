import { GetServerSideProps } from 'next';

import { fetchTrendingProductsAction } from '../redux/reducers/product';
import { initialStore } from '../redux/store';
import Banner from '../components/Banner';
import Home from '../features/Home';
import MainLayout from '../layouts/MainLayout';
import bannerBg from '../assets/images/banner.jpg';

const HomePage = () => {
	return (
		<MainLayout>
			<Banner background={bannerBg} />
			<Home />
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const reduxStore = initialStore();
	const { dispatch } = reduxStore;

	await dispatch(fetchTrendingProductsAction());

	return {
		props: { initialReduxState: reduxStore.getState() },
	};
};

export default HomePage;
