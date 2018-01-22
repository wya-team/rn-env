import React from 'react';
import MineMain from './Modules/MineMain';
import { Icon } from 'antd-mobile';
export const mineTabConfig = {
	MineMain: { 
		screen: MineMain,
		path: '/mine',
		navigationOptions: {
			title: '我的',
			tabBarIcon: (props = {}) => {
				const { tintColor } = props;
				return (
					<Icon 
						type={`\ue600`} 
						size={20} 
						color={tintColor}
					/>
				);
			}
		}
	}
};
export const mineConfig = {
	// [RouterName][*SecondName]: [Component]
};