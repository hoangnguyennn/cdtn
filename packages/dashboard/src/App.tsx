import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import { getLoading } from './redux/reducers/app';
import Routes from './routes/Routes';

const App = () => {
	const isLoading = useSelector(getLoading());

	return (
		<>
			<Routes />
			<ToastContainer />
			{isLoading && (
				<div className="loading">
					<div className="loading-sign"></div>
					<div className="text">Loading</div>
				</div>
			)}
		</>
	);
};

export default App;
