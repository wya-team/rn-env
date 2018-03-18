import { Dimensions, StyleSheet } from 'react-native';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;


export const group =  {
	// container: {
	// 	flex: 1,
	// 	backgroundColor: '#f1f1f1'
	// },
	// level: {
	// 	marginLeft: 24 * WIDTH_SCALE,
	// 	paddingHorizontal: 14 * WIDTH_SCALE,
	// 	paddingVertical: 7 * WIDTH_SCALE,
	// 	borderRadius: 20 * WIDTH_SCALE,
	// 	borderColor: '#aeb4e6',
	// 	borderWidth: 1,
	// 	borderStyle: 'solid',
	// 	color: '#aeb4e6',
	// 	fontSize: 20 * WIDTH_SCALE,
	// 	fontWeight: '900'
	// },
	// borderBottom: {
	// 	borderBottomWidth: 1 * StyleSheet.hairlineWidth,
	// 	borderColor: '#ccc',
	// },
	// bottom: {
	// 	backgroundColor: 'white',
	// 	flexDirection: 'row',
	// 	justifyContent: 'space-around',
	// 	alignItems: 'center',
	// 	height: 80 * HEIGHT_SCALE
	// },
	// bottomItem: {
	// 	flex: 1,
	// 	flexDirection: 'row',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	alignSelf: 'stretch'
	// },
	// bottomCenter: {
	// 	borderLeftWidth: 2 * StyleSheet.hairlineWidth,
	// 	borderStyle: 'solid',
	// 	borderLeftColor: '#e7e7e7',
	// 	height: 26 * HEIGHT_SCALE
	// },
	// border: {
	// 	borderWidth: 2 * StyleSheet.hairlineWidth,
	// 	borderStyle: 'solid',
	// 	borderColor: '#ccc',
	// 	borderRadius: 10 * WIDTH_SCALE
	// },
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