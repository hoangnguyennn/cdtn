import { FC } from 'react';
import Header from '../../components/Header';

const MainLayout: FC = ({ children }) => {
	return (
		<>
			<Header />

			{children}
		</>
	);
};

export default MainLayout;
