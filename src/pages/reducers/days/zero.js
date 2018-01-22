import * as types from '../../constants/actions/days';
const initialState = {
	count: 0,      // 是否已经获取
};
export const daysZero = (state = initialState, action) => {
	switch (action.type) {
		case types.DAYS_ZERO_MIN:
			return {
				count: state.count - 1
			};
		case types.DAYS_ZERO_PLUS:
			return {
				count: state.count + 1
			};
		case types.DAYS_ZERO_ASYNC_POST + '_SUCCESS':
			return {
				count: state.count + 1
			};
		default:
			return state;
	}
};
