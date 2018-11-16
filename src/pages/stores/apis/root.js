import { DEV_WITH_SERVER } from '@constants/constants';
import __tpl__ from './__tpl__';
import _common from './_common';
import home from './home';
import login from './login';
const API = {
	...__tpl__,
	..._common,
	...home,
	...login,
};
let baseUrl;
/* global __DEV__ */
if (__DEV__) {
	// 开发环境
	if (!DEV_WITH_SERVER) { // 开发环境-前端自模拟
		baseUrl = 'http://192.168.0.99:3000/api';
	} else { // 开发环境-后端数据
		baseUrl = 'http://client.??.com';
	}
} else {
	// 生产环境
	baseUrl = 'http://client.??.com';
}
for (let i in API) {
	if (/[a-zA-z]+:\/\/[^\s]*/.test(API[i])) {
		API[i] = API[i];
	} else {
		API[i] = baseUrl + API[i];
	}
}

export default API;
