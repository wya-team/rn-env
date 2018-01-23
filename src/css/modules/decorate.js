import React from 'react';
import { Dimensions } from 'react-native';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

export const decorate = {
	'g-bd-c': {
		borderRadius: 35
	},
	'g-bb-light': {
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	'g-bt-light': {
		borderTopWidth: 1,
		borderTopColor: '#ddd',
	}
};
