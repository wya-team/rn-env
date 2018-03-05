import * as types from '../../constants/actions/login';
const initialState = {
	
};
export const login = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_MAIN_POST + '_SUCCESS':
			return state;
		default:
			return state;
	}
};
