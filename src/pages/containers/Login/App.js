import React from 'react';
import { View } from 'react-native';
import Icon from '@common/Icon/Icon';
import LoginMain from './Modules/LoginMain';

export const loginConfig = {
	LoginMain: {
		screen: LoginMain,
		path: '/login',
		navigationOptions: {
			header: <View />
		}
	},
};