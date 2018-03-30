import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	StyleSheet,
	Animated,
	ActivityIndicator
} from 'react-native';

import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
import { pullText } from './common';

class PullRefresh extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			/**
			 * 0.未开始
			 * 1.pulling但未达到pulledPauseY 
			 * 2.pulling达到pulledPauseY 
			 * 3.进入pause状态 （loading）
			 */
			pullStatus: 0,
			scrollY: new Animated.Value(0)
		};
	}

	componentDidMount() {
		this.state.scrollY.addListener((value) => this.handleScrollTrigger(value));
	}
	componentWillReceiveProps(props) {
		if (this.props.isRefreshing !== props.isRefreshing) {
			if (!props.isRefreshing) {
				this.refs.ScrollComponent.scrollTo({
					y: 0,
					animated: true
				});
				this.setState({
					pullStatus: 0,
				});
			}
		}
	}
	componentWillUnmount() {
		this.state.scrollY.removeAllListeners();
	}

	handleScrollTrigger = (distance) => {
		if (this.state.pullStatus == 3) return;
		// 上拉
		if (distance.value > 0) {
			this.setState({
				pullStatus: 0
			});
			return;
		}


		// 下拉达未超过临界值
		if (-distance.value < this.props.pulledPauseY) {
			this.setState({
				pullStatus: 1
			});
			return;
		}

		// 超过临界值
		this.setState({
			pullStatus: 2
		});

	}
	// 在整个触摸事件结束时调用这个函数
	handleResponderRelease = () => {
		if (this.state.pullStatus === 2) {
			this.refs.ScrollComponent.scrollTo({
				y: -this.props.pulledPauseY,
				animated: true
			});
			this.setState({
				pullStatus: 3
			});
			this.props.onRefresh();
		}
	}
	handleScroll = (event) => {
		const { onScroll } = this.props;
		if (onScroll) {
			onScroll(event);
		}
		this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
	}
	setDefault = () => {
		if (this.state.scrollY._value < 0) {
			this.refs.ScrollComponent.scrollTo({
				y: 0,
				animated: true
			});
		}
		
		this.setState({
			pullStatus: 0
		});
	}
	render() {
		const { backgroundColor: _bg, style = {}, pulledPauseY  } = this.props;
		const bg = typeof _bg === 'object' ? _bg.backgroundColor : _bg;
		const { isScrollFree, pullStatus } = this.state;
		let animateHeight = pullStatus === 3 
			? pulledPauseY
			: this.state.scrollY.interpolate({
				inputRange: [-pulledPauseY, 0],
				outputRange: [pulledPauseY, 0]
			});
		return (
			<View style={[ { flex: 1, zIndex: 1, backgroundColor: bg }, style.container ]}>
				<Animated.View style={[{ height: animateHeight, backgroundColor: bg }, styles.status]}>
					{ 
						pullStatus === 3 
							? <ActivityIndicator /> 
							: <Text>{pullText[pullStatus]}</Text>
					}
				</Animated.View>
				<View style={[styles.content]}>
					{React.cloneElement(this.props.children, {
						scrollEnabled: true,
						onScroll: this.handleScroll,
						scrollEventThrottle: 16,
						onResponderRelease: this.handleResponderRelease,
						ref: 'ScrollComponent',
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	status: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});


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
	pulledPauseY: 80 * WIDTH_SCALE,
	backgroundColor: 'transparent'
};

export default PullRefresh;