import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
// const dimensionWidth = Dimensions.get('window').width;
// const dimensionHeight = Dimensions.get('window').height;

export const decorate = {
	'g-shadow': {
		shadowColor: '#ccc',
		shadowRadius: 5 * WIDTH_SCALE
	},
	'g-bd-c': {
		borderRadius: 35 * WIDTH_SCALE
	},
	'g-bt': {
		borderTopWidth: 2 * StyleSheet.hairlineWidth,
		borderTopColor: '#f1f1f1',
	},
	'g-bb': {
		borderBottomWidth: 1,
		borderBottomColor: '#f1f1f1',
	},
	'g-br': {
		borderRightWidth: 1,
		borderRightColor: '#f1f1f1',
	},
	'g-bt': {
		borderTopWidth: 2 * StyleSheet.hairlineWidth,
		borderTopColor: '#f1f1f1',
	},
	'g-b-line-gray': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderWidth: 2,
		borderColor: "#f1f1f1",
		borderStyle: "solid",
	},
	'g-b-line-purple': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderWidth: 1 * StyleSheet.hairlineWidth,
		borderColor: "#585ad1",
		borderStyle: "solid",
	}
};
