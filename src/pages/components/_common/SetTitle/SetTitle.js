import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Icon from '../Icon/Icon';
import Constants from 'expo-constants';
import { WIDTH_SCALE, HEIGHT_SCALE, WINDOW_WIDTH, WINDOW_HEIGHT } from '@css/modules/dimension';
export const TITLE_BAR_HEIGHT = 44; // Platform.OS === 'ios' ? 44 : 56
export const LOLLIPOP = 21;

@withNavigationFocus
class SetTitle extends PureComponent {
	constructor(...params) {
		super(...params);
	}
	handleGoBack = () => {
		let { onBackBefore } = this.props;

		const before = onBackBefore && onBackBefore();

		if (before && typeof before === 'object' && before.then) {
			before.then((isBack = true) => {

				isBack && this.props.navigation.goBack(null);
			}).catch(e => {
				console.error(e);
			});
		} else if (before === true) {
			this.props.navigation.goBack(null);
		}
	}
	render() {
		let {
			tag: Tag = View,
			style,
			title,
			showBack,
			renderLeftView,
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
									// <Text >&#10094;</Text>
								}
								<Icon type="left" styleIcon={style.backIcon} />
							</TouchableOpacity>
						)}
						{
							renderLeftView && (
								typeof renderLeftView == 'object' 
									? renderLeftView
									: renderLeftView()
							) 
						}
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
						<View style={{ flex: 1 }} />
						{
							renderRightView && (
								typeof renderRightView == 'object' 
									? renderRightView
									: renderRightView()
							) 
						}
					</View>
				)}
				{this.props.children}
			</Tag>

		);
	}
}
SetTitle.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	style: PropTypes.object,
	title: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.bool]),
	showBack: PropTypes.bool,
	renderLeftView: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	renderRightView: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	barProps: PropTypes.object,
	showStatusBarPlaceholder: PropTypes.bool,
	onBackBefore: PropTypes.func
};
SetTitle.defaultProps = {
	showBack: true,
	style: {},
	/**
	 * 	更多的自定义状态了背景，暂时不用SafeAreaView
	 */
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
	showStatusBarPlaceholder: true,
	onBackBefore: () => true
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// 背景颜色
		// backgroundColor: "white"
	},
	statusBar: {
		height: Constants.statusBarHeight,
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
		zIndex: 1,
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
		fontSize: 40 * WIDTH_SCALE,
		letterSpacing: 3
	},
	content: {
		flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 0, // 待定
		alignItems: 'center',
		justifyContent: 'center'
	},
	bg: {
		position: 'absolute',
		height: 750 * WIDTH_SCALE,
		width: WINDOW_WIDTH,
		backgroundColor: '#fff'
	} 
});


export default SetTitle;
