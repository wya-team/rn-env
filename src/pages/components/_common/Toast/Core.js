import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ViewPropTypes,
	StyleSheet,
	View,
	Text,
	Animated,
	Dimensions,
	TouchableWithoutFeedback,
	Easing,
	Keyboard
} from 'react-native';
const TOAST_MAX_WIDTH = 0.8;
const TOAST_ANIMATION_DURATION = 200;
const DIMENSION = Dimensions.get('window');
let KEYBOARD_HEIGHT = 0;

Keyboard.addListener('keyboardDidChangeFrame', function ({ endCoordinates }) {
	KEYBOARD_HEIGHT = DIMENSION.height - endCoordinates.screenY;
});

const WINDOW_WIDTH = DIMENSION.width;
const positions = {
	TOP: 20,
	BOTTOM: -20,
	CENTER: 0
};

const durations = {
	LONG: 3500,
	SHORT: 2000
};

let styles = StyleSheet.create({
	defaultStyle: {
		position: 'absolute',
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
		// zIndex: 1000 // 无效
	},
	containerStyle: {
		padding: 10,
		backgroundColor: '#000',
		opacity: 0.8,
		borderRadius: 5,
		marginHorizontal: WINDOW_WIDTH * ((1 - TOAST_MAX_WIDTH) / 2)
	},
	shadowStyle: {
		shadowColor: '#000',
		shadowOffset: {
			width: 4,
			height: 4
		},
		shadowOpacity: 0.8,
		shadowRadius: 6,
		elevation: 10
	},
	textStyle: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center'
	}
});

class Core extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			visible: this.props.visible,
			opacity: new Animated.Value(0)
		};

		this.animating = false;
		this.root = null;
		this.hideTimeout = null;
		this.showTimeout = null;
	}

	componentDidMount(){
		if (this.state.visible) {
			this.showTimeout = setTimeout(() => this.handleShow(), this.props.delay);
		}
	};

	componentWillReceiveProps(nextProps){
		if (nextProps.visible !== this.props.visible) {
			if (nextProps.visible) {
				clearTimeout(this.showTimeout);
				clearTimeout(this.hideTimeout);
				this.showTimeout = setTimeout(() => this.handleShow(), this.props.delay);
			} else {
				this.handleHide();
			}

			this.setState({
				visible: nextProps.visible
			});
		}
	};

	componentWillUnmount ()  {
		this.handleHide();
	};



	handleShow = () => {
		clearTimeout(this.showTimeout);
		if (!this.animating) {
			clearTimeout(this.hideTimeout);
			this.animating = true;
			this.root.setNativeProps({
				pointerEvents: 'auto'
			});
			this.props.onShow && this.props.onShow(this.props.siblingManager);
			Animated.timing(this.state.opacity, {
				toValue: this.props.opacity,
				duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
				easing: Easing.out(Easing.ease)
			}).start(({ finished }) => {
				if (finished) {
					this.animating = !finished;
					this.props.onShown && this.props.onShown(this.props.siblingManager);
					if (this.props.duration > 0) {
						this.hideTimeout = setTimeout(() => this.handleHide(), this.props.duration);
					}
				}
			});
		}
	};

	handleHide = () => {
		clearTimeout(this.showTimeout);
		clearTimeout(this.hideTimeout);
		if (!this.animating) {
			this.root.setNativeProps({
				pointerEvents: 'none'
			});
			this.props.onHide && this.props.onHide(this.props.siblingManager);
			Animated.timing(this.state.opacity, {
				toValue: 0,
				duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
				easing: Easing.in(Easing.ease)
			}).start(({ finished }) => {
				if (finished) {
					this.animating = false;
					this.props.onHidden && this.props.onHidden(this.props.siblingManager);
				}
			});
		}
	};

	render() {
		let { props } =  this;
		let offset = props.position;
		let position = offset ? {
			[offset < 0 ? 'bottom' : 'top']: offset < 0 ? (KEYBOARD_HEIGHT - offset) : offset
		} : {
			top: 0,
			bottom: KEYBOARD_HEIGHT
		};

		return (this.state.visible || this.animating) 
			? (
				<View
					style={[
						styles.defaultStyle,
						position
					]}
					pointerEvents="box-none"
				>
					<TouchableWithoutFeedback
						onPress={this.props.hideOnPress ? this.handleHide : null}
					>
						<Animated.View
							style={[
								styles.containerStyle,
								props.containerStyle,
								props.backgroundColor && { backgroundColor: props.backgroundColor },
								{
									opacity: this.state.opacity
								},
								props.shadow && styles.shadowStyle,
								props.shadowColor && { shadowColor: props.shadowColor }
							]}
							pointerEvents="none"
							ref={ele => this.root = ele}
						>
							{this.props.children}
						</Animated.View>
					</TouchableWithoutFeedback>
				</View>
			)
			: null;
	}
}

Core.propTypes = {
	...ViewPropTypes,
	containerStyle: ViewPropTypes.style,
	duration: PropTypes.number,
	visible: PropTypes.bool,
	position: PropTypes.number,
	animation: PropTypes.bool,
	shadow: PropTypes.bool,
	backgroundColor: PropTypes.string,
	opacity: PropTypes.number,
	shadowColor: PropTypes.string,
	textColor: PropTypes.string,
	textStyle: Text.propTypes.style,
	delay: PropTypes.number,
	hideOnPress: PropTypes.bool,
	onHide: PropTypes.func,
	onHidden: PropTypes.func,
	onShow: PropTypes.func,
	onShown: PropTypes.func
};

Core.defaultProps = {
	visible: false,
	duration: durations.SHORT,
	animation: true,
	shadow: false,
	position: positions.CENTER,
	opacity: 0.8,
	delay: 0,
	hideOnPress: true
};
export default Core;
