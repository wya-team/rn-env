import { combineReducers } from 'redux';
import common from './common/root';
import home from './home/root';
import __tpl__ from './__tpl__/root';

const rootReducer = combineReducers({
	...__tpl__,
	...common,
	...home,
});
export default rootReducer;
