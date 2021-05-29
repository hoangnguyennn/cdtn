import { FC, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';
import { updateCartFromLocalStorage } from '../../redux/reducers/cart';

const MainLayout: FC = ({ children }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateCartFromLocalStorage());
	}, []);

	return (
		<>
			<Header />

			{children}

			<Footer />
		</>
	);
};

export default MainLayout;
