import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { interceptors } from './services/instance';

interceptors(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
