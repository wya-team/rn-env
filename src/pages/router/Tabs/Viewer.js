import React from 'react';
import { View } from 'react-native';
import { Bar } from './Bar';
export const Viewer = ({ descriptors, navigation }) => {
	const { routes, index } = navigation.state;
	const descriptor = descriptors[routes[index].key];
	const Screen = descriptor.getComponent();
	return (
		<View style={{ flex: 1 }}>
			<Screen navigation={descriptor.navigation} style={{ flex: 1 }} />
			<Bar navigation={navigation} />
		</View>
	);
};
