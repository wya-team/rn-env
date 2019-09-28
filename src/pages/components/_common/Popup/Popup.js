import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Keyboard from '../Keyboard/Keyboard';
let style = {
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: 0,
	top: 0,
	// justifyContent: 'flex-end',
	backgroundColor: 'rgba(0,0,0,.3)'
};
const { height: h, width: w } = Dimensions.get("window");

class Modal extends React.Component {
	constructor(...params) {
		super(...params);
		this.state = { 
			translateY: new Animated.Value(h),
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
				{ toValue: h }
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
		const { height = 360, keyboard } = this.props;
		const { translateY, opacity } = this.state;
		return (
			<Fragment>
				<Animated.View style={[style, { opacity }]} />
				<View style={[style, { height: h, backgroundColor: 'rgba(0,0,0,0)' }]}>
					<TouchableOpacity onPress={this.handlePress} style={{ flex: 1, opacity: 0 }} />
					<Animated.View style={{ height, backgroundColor: 'white', width: w, transform: [{ translateY }] }}>
						{
							this.props.children
						}
					</Animated.View>
					{ keyboard && <Keyboard /> }
				</View>
			</Fragment>
		);
	}
}

Modal.contextTypes = {
};
export default Modal;