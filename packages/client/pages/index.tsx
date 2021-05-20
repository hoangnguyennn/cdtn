import { GetServerSideProps, NextPage } from 'next';
import { fetchTrendingProducts } from '../apis/product.api';

import Banner from '../components/Banner';
import Home from '../features/Home';
import { IProductResponse } from '../interfaces';
import MainLayout from '../layouts/MainLayout';

type HomePageProps = {
	trendingProducts: IProductResponse[];
};

const HomePage: NextPage<HomePageProps> = ({ trendingProducts }) => {
	return (
		<MainLayout>
			<Banner background="http://vikinoko.com/resources/css/img/Mhero.jpg" />
			<Home trendingProducts={trendingProducts} />
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const trendingProducts = await fetchTrendingProducts();

	return {
		props: {
			trendingProducts,
		},
	};
};

export default HomePage;
