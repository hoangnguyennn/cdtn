import ProductList from '../components/Product/List';

const Home = () => {
	return (
		<div className="container">
			<ProductList columns={4} title="Trending products" />
		</div>
	);
};

export default Home;
