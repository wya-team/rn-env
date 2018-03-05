import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { Stacks } from './Stacks';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { Toast } from 'antd-mobile';

import { _global } from './_global';
import { getItem, setItem } from '@utils/utils';
import { addListener } from '../stores/configureStore';
let _navigation;
class Router extends Component {
	constructor(props, context) {
		super(props, context);
	}
	getChildContext() {
		return { 
			navigation: this.navigation 
		};
	}

	componentDidMount() {
		if (!_global.token) {
			const resetAction = NavigationActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'LoginMain' }),
				],
			});
			this.navigation.dispatch(resetAction);
		}
		
		/**
		 * ----------  Tip  ------------
		 * 官方文档说createNavigationContainer可以用来监听android的返回键，部分源码：
		 *  this.subs = BackAndroid.addEventListener('backPress', () =>
		 *		this.dispatch(NavigationActions.back())
		 *	);
		 * BackAndroid是其自定义的对象，并不能监听android的物理返回键
		 * 现用如下方式进行监听
		 */
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}

	onBackPress = () => {
		const { dispatch, commonNav } = this.props;
		if (commonNav.index === 0) {
			let now = new Date().getTime();

			if (now - this.lastBackPressed < 3000) {
				return false;
			}
			this.lastBackPressed = now;
			Toast.info('再点击一次退出应用', 3);
			return true;
		}
		dispatch(NavigationActions.back());
		return true;
	};
	render() {
		const { dispatch, commonNav } = this.props;
		this.navigation = addNavigationHelpers({
			dispatch,
			state: commonNav,
			addListener
		});
		_navigation = this.navigation;
		return (
			<Stacks navigation={this.navigation} />
		);
	}
}

Router.propTypes = {
	// dispatch: PropTypes.func,
	// commonNav: PropTypes.object,
};
Router.childContextTypes = {
	navigation: PropTypes.object
};
const mapStateToProps = state => {
	return {
		commonNav: state.commonNav
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	};
};
export { _navigation };
export default connect(mapStateToProps, mapDispatchToProps)(Router);
