import React from 'react';

import { View, Text } from 'react-native';
import SetTitle from '@common/SetTitle/SetTitle';
import Content from '@components/__tpl__/Three/Content';

class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		const { navigation } = this.props;
		return (
			<SetTitle tag={View} title="TplThree" routeName="TplThree">
				<Content />
			</SetTitle>
		);
	}
}


export default Container;