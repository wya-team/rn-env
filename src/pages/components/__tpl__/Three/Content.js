import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Toast } from '@common/root';
import Test from '@common/Popup/examples/Test';
class Example extends Component {
	componentWillMount () {
	}

	handleToast() {
		try {
			Toast.show('test');
		} catch (e) {
			console.log(e);
		}
	}
	handleModal() {

	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={this.handleToast}>
					<Text>Toast</Text>
				</TouchableOpacity>
				<Test />
			</View>
		);
	}
}

export default Example;