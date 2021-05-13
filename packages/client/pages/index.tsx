import MainLayout from '../layouts/MainLayout';
import ProductList from '../components/Product/List';

const HomePage = () => {
	return (
		<MainLayout>
			<div className="container">
				<ProductList columns={1} lg-columns={4} title="Trending products" />
			</div>
		</MainLayout>
	);
};

export default HomePage;
