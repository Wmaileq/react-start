import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history)];

if ('development') {
  if (typeof window.devToolsExtension === 'function') {
    enhancers.push(window.devToolsExtension())
  }
}

const composedStore = compose(applyMiddleware(...middleware), ...enchancers);

export default createStore(rootReducer, initialState, composedStore);