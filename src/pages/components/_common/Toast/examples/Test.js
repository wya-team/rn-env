import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Toast from '@components/_common/Toast/Toast';
import { setItem, delItem, getItem, updateItem } from '@utils/utils';

class Test extends React.Component {
	constructor(...params) {
		super(...params);
	}
	handlePress = async () => {	
		setItem('test', { name: 1 });
		try { 
			let test = await getItem("test");
			let toast = Toast.show(`Portals提示\nnavigation:${typeof this.context.navigation}\n${test.name}`, {
				duration: Toast.durations.LONG,
				position: Toast.positions.CENTER,
				shadow: true,
				animation: true,
				hideOnPress: true,
				delay: 0,
				onShow: () => {
					// console.log(`${typeof this.context.navigation}`);
				},
				onShown: () => {
				},
				onHide: () => {
					// console.log(JSON.stringify({}));
					delItem('test');
					// this.context.navigation.navigate('HomeMain');
				},
				onHidden: () => {
				}
			});
			// Toast.hide(toast);
		} catch (e) {
		}

	}
	render() {
		return (
			<TouchableOpacity onPress={this.handlePress}>
				<View>
					<Text>点击我：Portals提示（Root同级）</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
Test.contextTypes = {
	navigation: PropTypes.object
};
export default Test;