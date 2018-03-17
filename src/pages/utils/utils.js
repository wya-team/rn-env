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
import { _global } from '../router/_global';
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