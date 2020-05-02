import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
