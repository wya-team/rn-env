import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from './middlewares/api';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducers from './reducers/root';

// 调试模式
import { DEBUG } from '../constants/constants';
// Chrome 结合 RemoteDev软件开发
import { composeWithDevTools } from 'remote-redux-devtools';

const navMiddleware = createReactNavigationReduxMiddleware(
	state => state.commonNav,
	rootKey
);

export const rootKey = "root";
export default (initialState = {}) => {
	// global __DEV__
	let finalCreateStore = null;
	if (DEBUG && __DEV__) {
		finalCreateStore = composeWithDevTools(
			applyMiddleware(thunk, navMiddleware, api)
		)(createStore);
	} else {
		finalCreateStore = compose(
			applyMiddleware(thunk, navMiddleware, api)
		)(createStore);
	}

	const store = finalCreateStore(reducers, initialState);

	if (module.hot) {
		// Enable hot module replacement for reducers
		module.hot.accept(() => {
			const nextRootReducer = require('./reducers/root').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

