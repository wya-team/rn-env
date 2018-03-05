import { Dimensions, StyleSheet } from 'react-native';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

export const position = {
	'g-p-r': {
		position: 'relative'
	},
	'g-p-a': {
		position: 'absolute'
	},
	'g-p-f': {
		position: 'fixed'
	},
	'g-t-0': {
		top: 0
	},
	'g-l-0': {
		left: 0
	},
	'g-b-0': {
		bottom: 0
	},
	'g-r-0': {
		right: 0
	}
};
