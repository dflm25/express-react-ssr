/**
 * config admin 
 */
import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import * as action from '../redux/actions';

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import '../../public/admin/style.scss';

store.dispatch(action.authCheck());

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // check auth
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}