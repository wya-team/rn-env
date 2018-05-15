import { Dimensions, StyleSheet } from 'react-native';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

export const text = {
	'g-fs-14': {
		fontSize: 14 * WIDTH_SCALE
	},
	'g-fs-15': {
		fontSize: 15 * WIDTH_SCALE
	},
	'g-fs-16': {
		fontSize: 16 * WIDTH_SCALE
	},
	'g-fs-18': {
		fontSize: 18 * WIDTH_SCALE
	},
	'g-fs-20': {
		fontSize: 20 * WIDTH_SCALE
	},
	'g-fs-22': {
		fontSize: 22 * WIDTH_SCALE
	},
	'g-fs-24': {
		fontSize: 24 * WIDTH_SCALE
	},
	'g-fs-25': {
		fontSize: 25 * WIDTH_SCALE
	},
	'g-fs-26': {
		fontSize: 26 * WIDTH_SCALE
	},
	'g-fs-30': {
		fontSize: 30 * WIDTH_SCALE
	},
	'g-fs-32': {
		fontSize: 32 * WIDTH_SCALE
	},
	'g-fs-34': {
		fontSize: 34 * WIDTH_SCALE
	},
	'g-fs-70': {
		fontSize: 70 * WIDTH_SCALE
	},
	'g-tl': {
		textAlign: 'left'
	},
	'g-tc': {
		textAlign: 'center'
	},
	'g-tr': {
		textAlign: 'right'
	},
	'g-tv-t': {
		textAlignVertical: 'top'
	},
	'g-tv-c': {
		textAlignVertical: 'center'
	},
	'g-tv-b': {
		textAlignVertical: 'bottom'
	},
	'g-lh-30': {
		lineHeight: 30 * WIDTH_SCALE
	},
	'g-lh-40': {
		lineHeight: 40 * WIDTH_SCALE
	},
	'g-lh-50': {
		lineHeight: 50 * WIDTH_SCALE
	},
	'g-lh-60': {
		lineHeight: 60 * WIDTH_SCALE
	}
};
