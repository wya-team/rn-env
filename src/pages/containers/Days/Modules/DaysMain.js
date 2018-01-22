import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'antd-mobile';

class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		const { navigation } = this.props;
		return (
			<View>
				<Button
					onClick={() => navigation.navigate('DaysZero')}
				>第0天计划（测试环境）（点我进入）</Button>
			</View>
		);
	}
}


export default Container;