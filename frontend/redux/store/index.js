/**
 * Store application
 */

import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk)),
);

persistStore(store);

export default store;
