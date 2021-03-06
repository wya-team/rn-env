import TplMain from './Modules/TplMain';
import TplZero from './Modules/TplZero';
import TplOne from './Modules/TplOne';
import TplTwo from './Modules/TplTwo';
import TplThree from './Modules/TplThree';
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
	},
	TplTwo: {
		screen: TplTwo,
		path: '/tpl/two'
	},
	TplThree: {
		screen: TplThree,
		path: '/tpl/three'
	}
};