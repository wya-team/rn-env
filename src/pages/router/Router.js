import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { Stacks } from './Stacks';
import { addNavigationHelpers } from 'react-navigation';
import { Toast } from 'antd-mobile';
class Router extends Component {
	constructor(props, context) {
		super(props, context);
	}
	componentDidMount() {
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
		return (
			<Stacks 
				navigation={addNavigationHelpers({
					dispatch,
					state: commonNav
				})}
			/>
		);
	}
}

Router.propTypes = {
	// dispatch: PropTypes.func,
	// commonNav: PropTypes.object,
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
export default connect(mapStateToProps, mapDispatchToProps)(Router);
