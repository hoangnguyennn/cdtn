import { FC, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';
import { updateCartFromLocalStorageAction } from '../../redux/reducers/cart';

const MainLayout: FC = ({ children }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateCartFromLocalStorageAction());
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
