import * as types from '../constants/actions/days';
/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';

export const minFn = () => {
	return {
		type: types.DAYS_ZERO_MIN
	};
};

export const plusFn = () => {
	return {
		type: types.DAYS_ZERO_PLUS
	};
};