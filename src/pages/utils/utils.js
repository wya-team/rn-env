/**
 * 工具类
 */

/**
 * 缓存
 * todo 
 * 1.添加一键全删
 * 2.设置储存时间
 */
import { AsyncStorage, DeviceStorage } from 'react-native';
import { _global } from '@routers/_global';
import { isEqualWith } from 'lodash';
/**
 * 获取
 * 安卓拿不到值，不会继续reject
 * @return Promise
 */
export const getItem = (key) => {
	return new Promise((resolve, reject) => {
		let timer = setTimeout(() => resolve(null), 100);
		AsyncStorage.getItem(`${key}@${_global.version}`)
			.then(res => {
				timer && clearTimeout(timer);
				return resolve(JSON.parse(res));
			})
			.catch(res => resolve(null));
	});
	
};
/**
 * 保存
 * @return Promise
 */
export const setItem = (key, value) => {
	return AsyncStorage.setItem(`${key}@${_global.version}`, JSON.stringify(value));
};
/**
 * 删除
 * @return Promise
 */
export const delItem = (key) => {
	return AsyncStorage.removeItem(`${key}@${_global.version}`);
};

// -- 缓存 end --

/**
 * 初始化数据
 * @param  {String} res 传入的数据
 * @param  {String} id  数组是已str区分 ，默认'id'
 * @param  {String} _count
 * @param  {Object} initObj 判断是否有init
 * @param  {Array} initArr 判断是否有init
 * @return {String}
 * 参考reducers中的使用
 */
export const initItem = (res, str, count, initObj, initArr) => {
	let itemArr = [];
	let itemObj = {};
	let data;
	let id = str || 'id';
	if (typeof res == "object" && res.data && res.data instanceof Array) { // 传入的不是数组。res.data是数组
		data = res.data;
	} else if (res instanceof Array) { // 传入的是数组
		data = res;
	} else {
		return console.error('初始化参数错误');
	}
	for (let i = 0; i < data.length; i++) {
		itemArr = [...itemArr, data[i][id]];
		itemObj = {
			...itemObj,
			[data[i][id]]: initObj || data[i]
		};
	}
	/* 判断是否有_count*/
	if (count) {
		let { _count } = res;
		return { itemArr, itemObj, _count };
	} else {
		return { itemArr, itemObj };
	}
};
/**
 * 作为分页初始数据
 */
export const initObj = {
	currentPage: 0, // 当前页数
	totalPage: 1, // 总页数
	isEnd: 0, // 是否正在加载 0 上拉加载，1为加载中，2为已全部加载,3数据异常
	itemArr: [],
	itemObj: {},
};

export const initTreeData = (obj, value, label, children) => {
	if (typeof obj === 'object') {
		return JSON.parse(
			JSON.stringify(obj)
				.replace(new RegExp(value, 'g'), 'value')
				.replace(new RegExp(label, 'g'), 'label')
				.replace(new RegExp(`children|${children}`, 'g'), 'children')
		);
	};
	console.error('参数错误');
	return [];
};

/**
 * for Service Compare
 */
export const serviceObj = {
	param: {},
	data: undefined
};
export const serviceCompare = (newParam, localObj) => {
	return isEqualWith(newParam, localObj.param)
		? localObj.data
		: undefined;
};


// 用于对象 
// @createMixins({})
// class {}
export const createMixins = (...mixins) => target => {
	Object.assign(target.prototype, ...mixins);
};


/* 验证数据*/
export let objRegex = {
	validNum: {
		regex: /^\d+(\.\d+)?$/,
		error: "请输入正确数字"
	},
	validInteger: {
		regex: /^[1-9]\d*$/,
		error: "请输入非负整数"
	},
	validEmail: {
		regex: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
		error: "邮箱格式不正确"
	},
	validDate: {
		regex: /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/,
		error: "日期格式不正确"
	},
	validTime: {
		regex: /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}/,
		error: "时间格式不正确"
	},
	validId: {
		// regex: /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/,
		regex: /(^[0-9a-zA-Z]{6,}$)/, // 港澳台比较特殊
		error: "身份证格式不正确"
	},
	validPrice: {
		// regex: /^([+-]?[1-9][\d]{0,3}|0)([.]?[\d]{1,2})?$/,
		regex: /^([1-9][\d]{0,10}|0)([.]?[\d]{1,2})?$/,
		error: "请输入正确金额"
	},
	validMobile: {
		regex: /^(13[0-9]|14[5|7]|15[^4|^\D]|17[0-9]|19[8|9]|166|18[0-9])\d{8}$/,
		// regex: /^\d+(\.\d+)?$/,
		error: "请填写正确的手机号码"
	},
	validPhone: {
		regex: /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/,
		error: "请填写正确的电话号码"
	},
	validPostalCode: {
		regex: /^\d{4}$/,
		error: "请输入4位短信验证码"
	},
	validZipCode: {
		regex: /^\d{6}$/,
		error: "请输入6位邮政编码"
	},
	validWeChat: {
		regex: /^[a-zA-Z\d_-]{5,}$/,
		error: "请输入正确的微信号"
	},
	validName: {
		regex: /^[A-Za-z0-9\u4e00-\u9fa5_-]{1,}$/,
		error: "请不要输入特殊字符"
	}
};

/**
 * 验证数据
 * @param  {String} rule 规则
 * @param  {String} value 校正的value
 * @param  {String} callback 回调报错
 * @return {String}
 */
export const dataValidity = (rule, value, callback, opts = {}) => {
	let error;
	if (typeof value === 'string') {
		value = value.trim();
	}
	if (rule.required && !value) {
		error = rule.name + "必填";
		callback(error);
		return false;
	}
	if (rule.type == 'validMobile') {
		value = value || '';
		value = value.replace(/\s/g, '');
	}
	if (objRegex[rule.type] && value && !objRegex[rule.type].regex.test(value)) {
		error = objRegex[rule.type].error;
		callback(error);
	} else {
		callback();
	}
};
