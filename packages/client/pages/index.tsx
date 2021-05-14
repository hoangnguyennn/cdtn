import MainLayout from '../layouts/MainLayout';
import ProductList from '../components/Product/List';
import Banner from '../components/Banner';

const HomePage = () => {
	return (
		<MainLayout>
			<Banner />
			<div className="container">
				<ProductList columns={1} lg-columns={4} title="Trending products" />
			</div>
		</MainLayout>
	);
};

export default HomePage;
