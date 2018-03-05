import { NavigationActions } from 'react-navigation';
import * as types from '../../constants/actions/home';
import { Stacks } from '../../router/Stacks';
import { getItem, setItem } from '@utils/utils';
// const initialState = Stacks.router.getStateForAction(
// 	NavigationActions.reset({
// 		index: 0,
// 		actions: [
// 			// Login TabBar对调会造成顶部按钮失效，原因未知(可能是样式问题)，先只有两个
// 			NavigationActions.navigate({
// 				routeName: 'TabBar',
// 			})
// 		],
// 	})
// );
const initialState = Stacks.router.getStateForAction([]);

export const commonNav = (state = initialState, action = {}) => {
	let newState;
	switch (action.type) {
		// 以上其他
		// case 'LOGIN_MAIN_POST':
		// 	nextState = Stacks.router.getStateForAction(
		// 		NavigationActions.back(),
		// 		state
		// 	);
		// 	break;
		default:
			newState = Stacks.router.getStateForAction(action, state);
			return newState || state;	

	}
};
