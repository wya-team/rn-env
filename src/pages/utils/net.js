/**
 * ajax
 * @param  {[type]} url     地址
 * @param  {[type]} method  请求类型
 * @param  {[type]} body    请求的参数
 * @param  {Object} options 扩展
 */
import createHttpClient from '@wya/http';
import { Toast } from '@ant-design/react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { setItem, getItem, delItem } from './utils';
import { _global } from '@routers/_global';

let timer = new Date;

const loadingFn = ({ options }) => {
	Toast.hide();
	Toast.loading(null, 0);
};
const loadedFn = () => {
	Toast.hide();
};

const otherFn = ({ response }) => {
	const { status } = res || {};
	const now = new Date;
	if (now - timer < 500) { // 500 毫秒以内，只执行第一次
		return;
	}
	timer = now;
	try {
		switch (status) {
			case -1: // 代表退出登录
				_global.token = null;
				delItem(`token`);
				const resetAction = StackActions.reset({
					index: 0,
					actions: [
						NavigationActions.navigate({ routeName: 'LoginMain' }),
					],
				});
				_global.dispatch(resetAction);
				return;
			default:
				return;
		}
	} catch (e) {
		console.log('otherCb', e);
	}
};

const beforeFn = ({ options }) => {
	const setUrlParams = (options, token) => {
		
	};
	// 默认文件获取file
	if (options.type === 'FORM' 
		&& options.param.file 
		&& typeof options.param.file === 'string'
	) {
		
		options.param = {
			...options.param,
			file: { 
				uri: options.param.file, 
				name: 'image.jpg', 
				type: 'multipart/form-data' 
			}
		};
	}
	return new Promise((resolve) => {
		let url = options.url;

		let paramArray = [`token=${token || ''}`];
		url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');

		resolve({
			...options,
			url
		});
	});
};

const afterFn = ({ options, response }) => {

};

const globalOptions = {
	restful: true,
	onLoading: loadingFn,
	onLoaded: loadedFn,
	onOther: otherFn,
	onBefore: beforeFn,
	onAfter: afterFn,
	apis: {},
	debug: process.env.NODE_ENV !== 'production'
	// requestType: 'form-data:json'
};

export default createHttpClient(globalOptions);
