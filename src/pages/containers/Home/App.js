import React from 'react';
import HomeMain from './Modules/HomeMain';
import Icon from '@common/Icon/Icon';
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
						type={`home`} 
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