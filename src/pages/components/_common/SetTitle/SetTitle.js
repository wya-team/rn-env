import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from '@common/Icon/Icon';
import { Constants } from 'expo';

import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
const TITLE_BAR_HEIGHT = 44; // Platform.OS === 'ios' ? 44 : 56
const LOLLIPOP = 21;
class SetTitle extends PureComponent{
	constructor(params) {
		super(...params);
	}
	handleGoBack = () => {
		this.context.navigation.goBack(null);
	}
	render() {
		const {
			tag: Tag,
			style,
			title,
			showBack,
			renderRightView,
			barProps,
			showStatusBarPlaceholder,
			curRouteName,
			routeName
		} = this.props;
		const {
			hidden,
			barStyle
		} = barProps;
		// console.log(curRouteName === routeName, routeName);
		return (
			<Tag style={[styles.container, style.container]}>
				{ (curRouteName === routeName) && <StatusBar {...barProps} /> }
				{ (showStatusBarPlaceholder ) && 
					<View 
						style={[
							styles.statusBar, 
							{ backgroundColor: `${barStyle === 'light-content' ? `rgba(0, 0, 0, 0.5)` : `white`}` }, 
							style.statusBar
						]} 
					/> 
				}
				{title && (
					<View style={[styles.titleBar, style.titleBar]}>
						{showBack && (
							 <TouchableOpacity
								style={[styles.backButton, style.backButton]}
								onPress={this.handleGoBack}
							>
								{
									<Text >&#10094;</Text>
								}
								{
									// 二选一
									// <Icon type="left" styleIcon={[styles.backIcon, style.backIcon]} />
								}
							</TouchableOpacity>
						)}
						<View style={[styles.content, style.content]}>
							{
								typeof title === 'string' 
									? (
										<Text numberOfLines={1} style={[styles.title, style.title]}>
											{title}
										</Text>
									) 
									: (
										title
									)
							}
						</View>
						{ 
							renderRightView && renderRightView()
						}
					</View>
				)}
				{this.props.children}
			</Tag>

		);
	}
}
SetTitle.contextTypes = {
	navigation: PropTypes.object
};
SetTitle.propTypes = {
	tag: PropTypes.func,
	style: PropTypes.object,
	title: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.bool]),
	showBack: PropTypes.bool,
	renderRightView: PropTypes.func,
	barProps: PropTypes.object,
	showStatusBarPlaceholder: PropTypes.bool,
	routeName: PropTypes.string.isRequired

};
SetTitle.defaultProps = {
	showBack: true,
	style: {},
	/**
	 * 	更多的自定义状态了背景，暂时不用SafeAreaView
	 */
	tag: View,
	barProps: {
		barStyle: "dark-content",
		/**
		 * 指定状态栏是否透明。
		 * 设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。
		 * 常和带有半透明背景色的状态栏搭配使用。
		 * 实际上无效，我们使用View做管理
		 * @type {Boolean}
		 */
		// translucent: true,
		// hidden: true
	},
	showStatusBarPlaceholder: true
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// 背景颜色
		// backgroundColor: "white"
	},
	statusBar: {
		height: Constants.statusBarHeight
	},
	titleBar: {
		flexDirection: 'row',
		alignItems: 'center',
		height: TITLE_BAR_HEIGHT,
		// marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
		backgroundColor: '#fff',
		elevation: 1,
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowRadius: StyleSheet.hairlineWidth,
		shadowOffset: {
			height: StyleSheet.hairlineWidth,
		},
		borderBottomColor: 'rgba(0, 0, 0, 0.16)',
		borderBottomWidth:
			Platform.OS === 'android' && Platform.Version < LOLLIPOP
				? StyleSheet.hairlineWidth
				: 0,
		zIndex: 1,
	},
	backButton: {
		zIndex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		height: TITLE_BAR_HEIGHT,
		width: TITLE_BAR_HEIGHT / 1.5
	},
	backIcon: {
		fontSize: 32 * WIDTH_SCALE,
	},
	title: {
		color: '#222',
		fontSize: 32 * WIDTH_SCALE,
	},
	content: {
		flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});

const getCurRouteName = (arr) => {
	const { index, routes } = arr;
	if (routes[index].routes && routes[index].routes instanceof Array) {
		return getCurRouteName(routes[index]);
	} else {
		return routes[index];
	}
};
const mapStateToProps = (state, ownProps) => {
	return {
		curRouteName: getCurRouteName(state.commonNav).routeName,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SetTitle);
