/**
 * config admin 
 */
import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import '../../public/admin/style.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}