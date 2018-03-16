import React, { Component } from 'react';
import PullDown from '@common/PullDown/PullDown';


import {
	Animated,
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Text,
	StatusBar,
	View,
} from 'react-native';

class Content extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<PullDown>
				<Text>2222</Text>
			</PullDown>
		);
	}
}

export default Content;