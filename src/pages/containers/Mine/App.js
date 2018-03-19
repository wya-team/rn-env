import React from 'react';
import MineMain from './Modules/MineMain';
import Icon from '@common/Icon/Icon';
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
						type={`user`} 
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