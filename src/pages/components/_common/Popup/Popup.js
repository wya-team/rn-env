import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
let style = {
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: 0,
	top: 0,
	// justifyContent: 'flex-end',
	backgroundColor: 'rgba(0,0,0,.3)'
};
const DIMENSION = Dimensions.get('window');

class Modal extends React.Component {
	constructor(...params) {
		super(...params);
	}
	handlePress = async () => {	
		this.props.onClose();
	}
	render() {
		return (
			<View onPress={this.handlePress} style={style}>
				<TouchableOpacity onPress={this.handlePress} style={{ flex: 1 }} />
				<View style={{ height: 500, backgroundColor: 'white', width: DIMENSION.width }}>
					{
						this.props.children
					}
				</View>
			</View>
		);
	}
}

Modal.contextTypes = {
};
export default Modal;