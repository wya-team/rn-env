import * as types from '../constants/actions/__tpl__';
/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';

export const minFn = () => {
	return {
		type: types.TPL_ZERO_MIN
	};
};

export const plusFn = () => {
	return {
		type: types.TPL_ZERO_PLUS
	};
};