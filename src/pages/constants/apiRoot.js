import { DEV_WITH_SERVER } from './constants';
import home from './api/home';
import days from './api/days';
const API = {
	...home,
	...days
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
