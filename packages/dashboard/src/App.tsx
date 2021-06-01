import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes/Routes';
import store from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<Routes />
			<ToastContainer />
		</Provider>
	);
};

export default App;
