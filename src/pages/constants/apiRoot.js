import { DEV_WITH_SERVER } from './constants';
import __tpl__ from './api/__tpl__';
import home from './api/home';
import login from './api/login';
const API = {
	...__tpl__,
	...home,
	...login
};
let baseUrl;
/* global __DEV__ */
if (__DEV__) {
	// 开发环境
	if (!DEV_WITH_SERVER) { // 开发环境-前端自模拟
		baseUrl = 'http://192.168.0.99:3000/api';
	} else { // 开发环境-后端数据
		baseUrl = 'http://192.168.0.99:3000/api';
	}
} else {
	// 生产环境
	baseUrl = 'http://192.168.0.99:3000/api';
}
for (let i in API) {
	API[i] = baseUrl + API[i];
}
export default API;
