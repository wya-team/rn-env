import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'antd-mobile';
import SetTitle from '@common/SetTitle/SetTitle';

let list = [
	{
		title: '00 - Redux-Async-Count',
		route: 'TplZero'
	},
	{
		title: '01 - scrollY',
		route: 'TplOne'
	},
	{
		title: '02 - TextInput/ScrollView',
		route: 'TplTwo'
	}
];
class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		const { navigation } = this.props;
		return (
			<SetTitle title="TplMain" routeName="TplMain">
				{
					list.map((item, index) => {
						const { title, route } = item;
						return (
							<Button
								key={route}
								onClick={() => navigation.navigate(route)}
							>{title}</Button>
						);
					})	
				}
			</SetTitle>
		);
	}
}


export default Container;