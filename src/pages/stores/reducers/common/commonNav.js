import { NavigationActions } from 'react-navigation';
import { Stacks } from '@routers/Stacks';
import { getItem, setItem } from '@utils/utils';
const initialState = Stacks.router.getStateForAction([]);

export const commonNav = (state = initialState, action = {}) => {
	let newState;
	switch (action.type) {
		default:
			newState = Stacks.router.getStateForAction(action, state);
			return newState || state;
	}
};
