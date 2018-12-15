import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Func from './Func';

class Test extends React.Component {
	constructor(...params) {
		super(...params);
	}
	handlePress(){	
		Func.popup({

		}).then(() => {

		}).catch(() => {

		});
	}
	render() {
		return (
			<TouchableOpacity onPress={this.handlePress}>
				<View>
					<Text>点击我</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
Test.contextTypes = {
	navigation: PropTypes.object
};
export default Test;