import TplMain from './Modules/TplMain';
import TplZero from './Modules/TplZero';
import TplOne from './Modules/TplOne';
export const tplConfig = {
	// [RouterName][*SecondName]: [Component]
	TplMain: {
		screen: TplMain,
		path: '/tpl',
	},
	TplZero: {
		screen: TplZero,
		path: '/tpl/zero',
	},
	TplOne: {
		screen: TplOne,
		path: '/tpl/one'
	}
};