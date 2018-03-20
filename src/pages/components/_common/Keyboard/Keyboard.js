import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Keyboard,
	LayoutAnimation,
	View,
	Dimensions,
	ViewPropTypes,
	Platform,
	StyleSheet
} from 'react-native';

// From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
const defaultAnimation = {
	duration: 500,
	create: {
		duration: 300,
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.opacity
	},
	update: {
		type: LayoutAnimation.Types.spring,
		springDamping: 200
	}
};

class KeyboardPlaceholder extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			keyboardSpace: 0,
			isKeyboardOpened: false
		};
		this.listeners = null;
	}

	componentDidMount() {
		const show = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
		const hide = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
		this.listeners = [
			Keyboard.addListener(show, this.handleShow),
			Keyboard.addListener(hide, this.handleHide)
		];
	}

	componentWillUnmount() {
		this.listeners.forEach(listener => listener.remove());
	}

	handleShow = (event) => {
		if (!event.endCoordinates) {
			return;
		}
		const { offset } = this.props;
		let animationConfig = defaultAnimation;
		if (Platform.OS === 'ios') {
			animationConfig = LayoutAnimation.create(
				event.duration,
				LayoutAnimation.Types[event.easing],
				LayoutAnimation.Properties.opacity,
			);
		}
		LayoutAnimation.configureNext(animationConfig);

		const screenHeight = Dimensions.get('window').height;
		// event.endCoordinates.height 虚拟键盘的高度
		const keyboardSpace = screenHeight - event.endCoordinates.screenY + offset;
		this.setState({
			keyboardSpace,
			isKeyboardOpened: true
		}, this.props.onToggle(true, keyboardSpace));
	}

	handleHide = (event) => {
		let animationConfig = defaultAnimation;
		if (Platform.OS === 'ios') {
			animationConfig = LayoutAnimation.create(
				event.duration,
				LayoutAnimation.Types[event.easing],
				LayoutAnimation.Properties.opacity,
			);
		}
		LayoutAnimation.configureNext(animationConfig);

		this.setState({
			keyboardSpace: 0,
			isKeyboardOpened: false
		}, this.props.onToggle(false, 0));
	}

	render() {
		const { keyboardSpace } = this.state;
		const { style } = this.props;
		return (
			<View 
				style={[styles.container, { height: keyboardSpace }, style]} 
			/>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		left: 0,
		right: 0,
		bottom: 0,
	},
});

KeyboardPlaceholder.propTypes = {
	offset: PropTypes.number,
	onToggle: PropTypes.func,
	style: ViewPropTypes.style,
};

KeyboardPlaceholder.defaultProps = {
	offset: 0,
	onToggle: () => null,
};

export default KeyboardPlaceholder;