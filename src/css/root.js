import { StyleSheet } from 'react-native';
import { flex } from './modules/flex';
import { layout } from './modules/layout';
import { decorate } from './modules/decorate';
import { text } from './modules/text';
import { position } from './modules/position';
const styleCommon = {
	...flex,
	...layout,
	...decorate,
	...text,
	...color,
	...position
};
/**
 * 样式转换
 */
// const littleCamelCase = (str) => {
// 	return str.replace(/(?:^\w|[A-Z]\b\w|\s+)/g, function(item, index) {
// 		if (item) {
// 			return "";
// 		}
// 		return index == 0 ? item.toLowerCase() : item.toUpperCase();
// 	});
// };

export const className = (str) => {
	let styleArr = [],
		styleObj = {},
		key;
	styleArr = [...new Set(str.split(" "))];
	for (let i = 0; i < styleArr.length; i++) {
		key = styleArr[i];
		if (key) {
			styleObj = {
				...styleObj,
				...styleCommon[key]
			};
		}
	}
	return {
		...styleObj
	};
};