import React from 'react';
import { Dimensions } from 'react-native';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

export const flex = {
	'g-flex': {
		display: 'flex',
	},
	'g-fd-rr': {
		flexDirection: 'row-reverse'
	},
	'g-fd-c': {
		flexDirection: 'column'
	},
	'g-fd-r': {
		flexDirection: 'row'
	},
	'g-fd-cr': {
		flexDirection: 'column-reverse'
	},
	'g-jc-sb': {
		justifyContent: 'space-between'
	},
	'g-jc-sa': {
		justifyContent: 'space-around'
	},
	'g-jc-c': {
		justifyContent: 'center'
	},
	'g-jc-fe': {
		justifyContent: 'flex-end'
	},
	'g-ai-c': {
		alignItems: 'center'
	},
	'g-ai-fe': {
		alignItems: 'flex-end'
	},
	'g-ai-s': {
		alignItems: 'stretch'
	},
	'g-fw-w': {
		flexWrap: 'wrap'
	},
	'g-ac-fs': {
		alignContent: 'flex-start'
	},
	'g-as-c': {
		alignSelf: 'center'
	},
	'g-as-fd': {
		alignSelf: 'flex-end'
	},
	'g-as-s': {
		alignSelf: 'stretch'
	},
	'g-col': {
		flex: 1
	},
	'g-col-2': {
		flex: 2
	},
	'g-col-3': {
		flex: 3
	},
	'g-col-4': {
		flex: 4
	},
	'g-w-full': {
		width: dimensionWidth
	},
	'g-h-full': {
		height: dimensionHeight
	},
	'g-full': {
		flexBasis: '100%'
	},
	'g-1of2': {
		flexBasis: '50%'
	},
	'g-1of3': {
		flexBasis: '33.3333%'
	},
	'g-2of3': {
		flexBasis: '66.6666%'
	},
	'g-1of4': {
		flexBasis: '25%'
	},
	'g-3of4': {
		flexBasis: '75%'
	},
	'g-flex-cc': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// boxSizing: 'border-box',
	}
};
