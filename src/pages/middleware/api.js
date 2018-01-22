
import * as types from '../constants/actions/_common';

import net from '../utils/net';
import API_ROOT from '../constants/apiRoot';

import { put, call, takeEvery } from 'redux-saga/effects';
const middlewareApi = function* (action){
	let API_OPT = action['API'];
	let { apiName, params = {}, opts = {} } = API_OPT;
	/**
	 * 如果有传递localData，就不会触发ajax了，直接触发_success
	 * 当前也可以传其他参数
	 */
	let { 
		localData,
		requestOnStop, // 是否需要出发请求_ON
		setPage,
		noLoading,
		pullToRefresh 
	} = opts;
	let {
		onSuccess,
		onError,
		onProgress,
		ajaxType = 'GET',
		param
	} = params;

	params = {
		...params,
		data: null
	};
	// 触发下一个action
	let nextAction = function(type, param, opts) {
		action['type'] = type;
		action['opts'] = opts;
		delete param['onSuccess'];
		delete param['onError'];
		const nextRequestAction = Object.assign({}, action, param);
		return nextRequestAction;
	};
	try {
		let result;
		// 触发正在请求的action
		if (setPage){
			result = yield put(nextAction(apiName + '_SETPAGE', params, opts));
		}
		if (!pullToRefresh && !requestOnStop) { // 下拉刷新和禁止_ON跳过
			result = yield put(nextAction(apiName + '_ON', params, opts));
		};
		let data = yield call(net.ajax, {
			url: API_ROOT[apiName], 
			type: ajaxType, 
			param, 
			localData, 
			noLoading: param.page === undefined ? noLoading : true
		});
		params = { // 由于后端格式是status:1,data:{}
			...params,
			data: data.data
		};

		//  触发请求成功的action
		pullToRefresh 
			? yield put(nextAction(apiName + '_REFRESH', params, opts))
			: yield put(nextAction(apiName + '_SUCCESS', params, opts));
		onSuccess && onSuccess(data);
		return result;
	} catch (e) {
		yield put(nextAction(apiName + '_ERROR', params, opts));
		onError && onError(e);
		console.log(e);
	}
};
const api = function* (){
	yield takeEvery(types.API_REQUEST, middlewareApi);
};

export default api;
