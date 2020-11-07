/**
 * Store application
 */

import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk)),
);

export default store;
