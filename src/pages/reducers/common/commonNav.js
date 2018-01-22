import { NavigationActions } from 'react-navigation';
import * as types from '../../constants/actions/home';
import { Stacks } from '../../router/Stacks';
const initialState = Stacks.router.getStateForAction(
	NavigationActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({
				routeName: 'TabBar',
			})
		],
	})
);

export const commonNav = (state = initialState, action = {}) => {
	let newState;
	switch (action.type) {
		// 以上其他
		default:
			newState = Stacks.router.getStateForAction(action, state);
			return newState || state;	

	}
};
