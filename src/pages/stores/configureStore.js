import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
// 持久化数据, 具体参考官方
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const config = {
	key: 'primary',
	version: "1.0.0",
	storage
};
// 
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const navMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.commonNav,
);
export const addListener = createReduxBoundAddListener("root");
import reducers from '../reducers/rootReducer';
let rootReducer;
// 针对所有的reducer都做缓存
// rootReducer = persistReducer(config, reducers);

// 只针对部分做缓存
// rootReducer = combineReducers({
// 	authReducer: persistReducer(authPersistConfig, authReducer),
// 	otherReducer: otherReducer,
// });


// 调试模式
import { DEBUG } from '../constants/constants';

// Chrome 结合 RemoteDev软件开发
import { composeWithDevTools } from 'remote-redux-devtools';
const configureStore = (initialState = {}) => {
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

	const store = finalCreateStore(rootReducer || reducers, initialState);
	// 持久化配置 
	// if (typeof self === 'object')
	persistStore(store, null, () => {
		store.getState(); // if you want to get restoredState
	});


	if (module.hot) {
		// Enable hot module replacement for reducers
		module.hot.accept(() => {
			const nextRootReducer = require('../reducers/rootReducer').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};
export default configureStore;

