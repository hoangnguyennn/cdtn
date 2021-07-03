import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import Router from 'next/router';

import 'react-toastify/scss/main.scss';

import { getLimitOfToast } from '../redux/reducers/app';
import Auth from '../guards/Auth';
import useStore from '../redux/store';

import '../locales';
import Seo from '../components/Seo';
import GlobalStyle from '../assets/styles';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const ToastComponent = dynamic(() =>
  import('react-toastify').then(module => module.ToastContainer)
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Auth>
        <Seo title={pageProps.title} />
        <Component {...pageProps} />
      </Auth>
      <ToastComponent limit={getLimitOfToast()(store.getState())} />
    </Provider>
  );
};

export default MyApp;
