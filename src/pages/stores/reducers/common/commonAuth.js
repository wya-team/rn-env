const initialState = {
	isFetching: 0,      // 是否已经获取
};
export const commonAuth = (state = initialState, action) => {
	switch (action.type) {
		case 'HOME_MAIN_GET_SUCCESS':
			return {
				...state,
				isFetching: 1,
				...action.data
			};
		default:
			return state;
	}
};
