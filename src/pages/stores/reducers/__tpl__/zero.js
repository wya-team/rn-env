const initialState = {
	count: 0,      // 是否已经获取
};
export const tplZero = (state = initialState, action) => {
	switch (action.type) {
		case 'TPL_ZERO_MIN':
			return {
				count: state.count - 1
			};
		case 'TPL_ZERO_PLUS':
			return {
				count: state.count + 1
			};
		case  'TPL_ZERO_ASYNC_POST_SUCCESS':
			return {
				count: state.count + 1
			};
		default:
			return state;
	}
};
