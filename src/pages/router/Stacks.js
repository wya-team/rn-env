import { TabNavigator, StackNavigator } from 'react-navigation';
// config
import { homeConfig, homeTabConfig } from '../containers/Home/App';
import { mineConfig, mineTabConfig } from '../containers/Mine/App';
import { daysConfig } from '../containers/Days/App';
// 标签页
const tabConfig = {
	screen: TabNavigator(
		{
			...homeTabConfig,
			...mineTabConfig
			
		},
		{
			lazy: true,
			tabBarPosition: 'bottom',
			tabBarOptions: {
				activeTintColor: '#3e9ce9',
				inactiveTintColor: '#999999',
				showIcon: true,
				style: {
					backgroundColor: '#fff'
				},
				indicatorStyle: {
					opacity: 0
				},
				tabStyle: {
					padding: 0
				}
			}
		}
	)
};
// 路由设置
const RouteConfigs = {
	TabBar: tabConfig,
	...mineConfig,
	...daysConfig,

};
// 路由配置
const StackConfig = {
	// initialRouteName: 'TabBar',
	// mode: 'modal',
	// headerMode: 'screen'
};
// 路由堆栈
export const Stacks = StackNavigator(RouteConfigs, StackConfig);