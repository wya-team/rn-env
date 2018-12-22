import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import PropTypes from 'prop-types';
import FadeAnimation from '../Animations/FadeAnimation';

const { height, width } = Dimensions.get("window");
let style = {
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: 0,
	top: 0,
	// justifyContent: 'flex-end',
	backgroundColor: 'rgba(0,0,0,.3)'
};

class Popup extends React.Component {
	constructor(...params) {
		super(...params);
		this.state = { 
			translateY: new Animated.Value(height),
			opacity: new Animated.Value(0)
		};
	}
	componentDidMount() {
		Animated.timing(
			this.state.translateY,
			{ toValue: 0 }
		).start();

		Animated.timing(
			this.state.opacity,
			{ toValue: 1 }
		).start();
	}
	handlePress = async () => {	
		try {
			Animated.timing(
				this.state.translateY,
				{ toValue: height }
			).start();

			Animated.timing(
				this.state.opacity,
				{ toValue: 0 }
			).start();
			setTimeout(() => {
				this.props.onClose();
			}, 500);
		} catch (e) {
			console.log(e);
		}
		
	}
	render() {
		const { translateY, opacity } = this.state;

		return (
			<Fragment>
				<Animated.View style={[style, { opacity }]} />
				<View  style={[style, { height, backgroundColor: 'rgba(0,0,0,0)' }]}>
					<TouchableOpacity onPress={this.handlePress} style={{ flex: 1, opacity: 0 }} />
					<Animated.View style={{ height: 500, backgroundColor: 'white', width, transform: [{ translateY }] }}>
						{
							this.props.children
						}
					</Animated.View>
				</View>
			</Fragment>
		);
	}
}

Popup.contextTypes = {
};
export default Popup;