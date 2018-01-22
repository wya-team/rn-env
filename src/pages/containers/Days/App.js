import DaysMain from './Modules/DaysMain';
import DaysZero from './Modules/DaysZero';
export const daysConfig = {
	// [RouterName][*SecondName]: [Component]
	DaysMain: {
		screen: DaysMain,
		path: '/days',
	},
	DaysZero: {
		screen: DaysZero,
		path: '/days/zero',
	}
};