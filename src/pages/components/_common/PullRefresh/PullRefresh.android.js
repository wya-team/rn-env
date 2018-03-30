import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Text,
	ScrollView,
	Animated,
	PanResponder,
	UIManager,
	Dimensions,
	ActivityIndicator,
	StyleSheet
} from 'react-native';

import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
import { pullText } from './common';
class PullRefresh extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollY: new Animated.Value(0),
			refreshHeight: new Animated.Value(0),
			/**
			 * 0.未开始
			 * 1.pulling但未达到pulledPauseY 
			 * 2.pulling达到pulledPauseY 
			 * 3.进入pause状态 （loading）
			 */
			pullStatus: 0
		};

		this.flagScroll = 0;
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
			onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
			onPanResponderMove: this.handlePanResponderMove,
			onPanResponderRelease: this.handlePanResponderEnd,
			onPanResponderTerminate: this.handlePanResponderEnd,
		});


		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	componentDidMount() {
		this.state.scrollY.addListener((value) => this.handleScrollTrigger(value));
	}
	componentWillUnmount() {
		this.state.scrollY.removeAllListeners();
	}
	/**
	 * 手势是否生效
	 */
	handleStartShouldSetPanResponder = (e, gestureState) => {
		this.flagScroll = this.state.scrollY._value;
		let bool = !this.state.pullStatus && this.state.scrollY._value <= 10;
		// console.log('is can start', bool);
		return bool;
	}
	handleMoveShouldSetPanResponder = (e, gestureState) => {
		let bool = !this.state.pullStatus && this.state.scrollY._value <= 10;
		// console.log('is can move', bool);
		return bool;
	}

	/**
	 * 最近一次的移动距离为gestureState.move{X,Y}
	 * 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
	 * 如果内容滚动值为0，则允许刷新。
	 */
	handlePanResponderMove = (e, gestureState) => {
		const { pulledPauseY } = this.props;
		if (gestureState.dy >= 0) {
			// 下拉
			// console.log('下');

			this.setState({
				pullStatus: gestureState.dy < pulledPauseY ? 1 : 2
			});
			this.state.refreshHeight.setValue(-1 * gestureState.dy * .5);
		} else {
			// console.log('上');
			this.setState({
				pullStatus: 0
			});
			// 上拉
			this.refs.ScrollComponent.scrollTo({ 
				y: this.flagScroll + ( - gestureState.dy * .1),
				animated: true 
			});
		}
	}
	/**
	 * 用户放开了所有的触摸点，且此时视图已经成为了响应者。
	 * 一般来说这意味着一个手势操作已经成功完成。
	 */
	handlePanResponderEnd = (e, gestureState) => {
		this.flagScroll = 0;
		const { pulledPauseY } = this.props;
		if (this.state.pullStatus === 2) {

			this.state.refreshHeight.setValue(pulledPauseY);

			this.refs.ScrollComponent.scrollTo({
				y: -this.props.pulledPauseY,
				animated: true
			});
			this.setState({
				pullStatus: 3
			});
			this.props.onRefresh();
		} else if (this.state.pullStatus === 1) {
			this.setState({
				pullStatus: 0
			});
		} else if (this.state.pullStatus === 3) {
			this.state.refreshHeight.setValue(pulledPauseY);

			this.refs.ScrollComponent.scrollTo({
				y: -this.props.pulledPauseY,
				animated: true
			});
		}
	}
	handleScroll = (event) => {
		const { onScroll } = this.props;
		if (onScroll) {
			onScroll(event);
		}
		this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
	}
	handleScrollTrigger = (distance) => {
		// console.log(distance.value, 'scroll');
		this.flagScroll = distance.value;
	}
	setDefault = () => {
		if (this.state.scrollY._value < 0) {
			this.refs.ScrollComponent.scrollTo({
				y: 0,
				animated: true
			});
			// console.log(this.state.scrollY._value);
		}
		// console.log(this.state.scrollY._value);
		this.setState({
			pullStatus: 0
		});
	}
	render() {
		const { backgroundColor: _bg, style = {}, pulledPauseY  } = this.props;
		const bg = typeof _bg === 'object' ? _bg.backgroundColor : _bg;
		const { refreshHeight, pullStatus } = this.state;
		let animateHeight = !pullStatus 
			? 0 
			: this.state.refreshHeight.interpolate({
				inputRange: [-pulledPauseY, 0],
				outputRange: [pulledPauseY, 0]
			});
		return  (
			<View
				style={[{ flex: 1 }, { backgroundColor: bg }, style.container ]}
				{...this.panResponder.panHandlers}
			>	
				<Animated.View style={[{ height: animateHeight, backgroundColor: bg }, styles.status]}>
					{ 
						pullStatus === 3 
							? <ActivityIndicator />
							: <Text>{pullText[pullStatus]}</Text>
					}
				</Animated.View>
				{
					React.cloneElement(this.props.children, {
						scrollEnabled: true,
						onScroll: this.handleScroll,
						scrollEventThrottle: 16,
						ref: 'ScrollComponent',
					})
				}
			</View>
		);
	}
}

PullRefresh.propTypes = {
	/**
	* Pull
	*/
	pulledPauseY: PropTypes.number,
	/**
	* Callback
	*/
	onRefresh: PropTypes.func.isRequired,
	/**
	* ui
	*/
	style: PropTypes.object,
	backgroundColor: PropTypes.string
};

PullRefresh.defaultProps = {
	pulledPauseY: 180 * WIDTH_SCALE,
	backgroundColor: 'transparent'
};

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'transparent',
		// position: 'absolute',
		// top: 0,
		// left: 0,
		// right: 0,
		// bottom: 0
	},
	status: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});
export default PullRefresh;