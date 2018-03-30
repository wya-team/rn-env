import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { TAB_BAR_HEIGHT } from '@constants/constants';
// config
import { homeConfig, homeTabConfig } from '../containers/Home/App';
import { mineConfig, mineTabConfig } from '../containers/Mine/App';
import { tplConfig } from '../containers/__tpl__/App';
import { loginConfig } from '../containers/Login/App';
// 标签页
const tabConfig = {
	screen: TabNavigator(
		{
			...homeTabConfig,
			...mineTabConfig
			
		},
		{
			lazy: true, // 控制tab模块是否都一开始加载
			initialRouteName: 'MineMain',
			tabBarPosition: 'bottom',
			tabBarOptions: {
				activeTintColor: '#3e9ce9',
				inactiveTintColor: '#999999',
				showIcon: true,
				style: {
					backgroundColor: '#fff',
					height: TAB_BAR_HEIGHT,
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
	...loginConfig,
	...mineConfig,
	...tplConfig,

};
// 路由配置
const StackConfig = {
	initialRouteName: 'TabBar',
	headerMode: 'none',
	// mode: Platform.OS === 'ios' ? 'card' : 'modal',
	mode: 'card',
	transitionConfig: () => {
		// navigator水平切换
		return {
			isModal: false
		};
	}
};
// 路由堆栈
export const Stacks = StackNavigator(RouteConfigs, StackConfig);