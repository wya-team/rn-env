import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
class Example extends Component {
	componentWillMount () {
	}


	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>2</Text>
				<Text>2</Text>
				<Text>2</Text>
				<Text>2</Text>
				<Text>2</Text>
				<Text>2</Text>
				<TextInput
					style={{ width: 200, backgroundColor: 'red' }}
					// onSubmitEditing={Keyboard.dismiss}
				/>
			</View>
		);
	}
}

export default Example;