import React from 'react';
import { Dimensions } from 'react-native';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

export const color = {
	'g-white': {
		color: '#fff'
	},
	'g-dark': {
		color: '#555'
	},
	'g-gray': {
		color: '#ddd'
	},
	'g-blue': {
		color: '#1b95e0'
	},
	'g-red': {
		color: '#f00'
	},
	'g-bg-white': {
		backgroundColor: '#fff'
	},
	'g-bg-gray': {
		backgroundColor: '#ddd'
	},
	'g-bg-light': {
		backgroundColor: '#f3f3f3'
	},
	'g-bg-light-blue': {
		backgroundColor: '#6cb4ff'
	},
	'g-bg-middle-blue': {
		backgroundColor: '#1b95e0'
	},
	'g-bg-trans': {
		backgroundColor: 'transparent'
	}
};
