import * as types from '../../constants/actions/home';
const initialState = {
	isFetching: 0,      // 是否已经获取
};
export const commonAuth = (state = initialState, action) => {
	switch (action.type) {
		case types.HOME_MAIN_GET + '_SUCCESS':
			return {
				...state,
				isFetching: 1,
				...action.data
			};
		default:
			return state;
	}
};
