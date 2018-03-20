import React from 'react';

import { View, Text } from 'react-native';
import SetTitle from '@common/SetTitle/SetTitle';
import Content from '@components/__tpl__/Two/Content';
import Keyboard from '@common/Keyboard/Keyboard';

class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		const { navigation } = this.props;
		return (
			<SetTitle tag={View} showStatusBarPlaceholder={false} routeName="TplTwo">
				<Content />
				<Keyboard />
			</SetTitle>
		);
	}
}


export default Container;