import { combineReducers } from 'redux';
import common from './common/root';
import home from './home/root';
import days from './days/root';

const rootReducer = combineReducers({
	...common,
	...home,
	...days,
});
export default rootReducer;
