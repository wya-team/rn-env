import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { AppLoading, Font } from 'expo';

import configureStore from '../stores/configureStore';
/**
 * pages
 */
import Router from './Router';

const store = configureStore();
// 控制
if (__DEV__) {
	window.store = store;
}
class Root extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loaded: false,
		};
	}
	componentWillMount() {
		this._loadAssetsAsync();
	}

	_loadAssetsAsync = async () => {
		// 字体库 如：fontFamily: 'anticon'
		await Font.loadAsync({
			anticon: require('../../fonts/anticon.ttf'),
		});
		this.setState({ loaded: true });
	};
	render() {
		if (!this.state.loaded) return <AppLoading />;
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}
export default Root;