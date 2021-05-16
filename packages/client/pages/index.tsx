import MainLayout from '../layouts/MainLayout';
import Banner from '../components/Banner';
import Home from '../features/Home';

const HomePage = () => {
	return (
		<MainLayout>
			<Banner background="http://vikinoko.com/resources/css/img/Mhero.jpg" />
			<Home />
		</MainLayout>
	);
};

export default HomePage;
