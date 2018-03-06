import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { AppLoading, Font } from 'expo';

import configureStore from '../stores/configureStore';
import { _global } from './_global';
import { getItem } from '../utils/utils';
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
			info: {}
		};
	}
	componentDidMount() {
		this.loadAssetsAsync();
	}

	loadAssetsAsync = async () => {
		try {
			// 字体库 如：fontFamily: 'anticon'
			await Font.loadAsync({
				anticon: require('../../assets/fonts/iconfont.ttf'),
			});
			const { token } = await getItem('token') || {};
			_global.token = token;

			this.setState({ 
				loaded: true
			});

		} catch (e) {

		}
	};
	render() {
		const { loaded, info } = this.state;
		if (!loaded) return <AppLoading />;
		return (
			<Provider store={store}>
				<Router/>
			</Provider>
		);
	}
}
export default Root;