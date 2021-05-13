import MobileMenu from '../components/Menu/Mobile';
import ProductList from '../components/Product/List';

const Home = () => {
	return (
		<div className="container">
			<ProductList columns={1} lg-columns={4} title="Trending products" />
			<MobileMenu />
		</div>
	);
};

export default Home;
