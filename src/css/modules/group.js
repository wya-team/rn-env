import { Dimensions, StyleSheet } from 'react-native';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;


export const group =  {
	'g-count': {
		alignItems: 'center',
		justifyContent: 'center',
		position: `absolute`,
		right: 60 * WIDTH_SCALE,
		top: 5 * WIDTH_SCALE,
		backgroundColor: `#FE0402`,
		width: 28 * WIDTH_SCALE,
		height: 28 * WIDTH_SCALE,
		borderRadius: 28 * WIDTH_SCALE
	}
};
