import React from 'react';
import HomeMain from './Modules/HomeMain';
import { Icon } from 'antd-mobile';
export const homeTabConfig = {
	HomeMain: { 
		screen: HomeMain,
		path: '/home',
		navigationOptions: {
			title: '首页',
			tabBarIcon: (props = {}) => {
				const { tintColor } = props;
				return (
					<Icon 
						type={`\ue601`} 
						size={20} 
						color={tintColor}
					/>
				);
			}
		}
	}
};
export const homeConfig = {
	// [RouterName][*SecondName]: [Component]
};