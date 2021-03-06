import React from 'react';

import { View, Text } from 'react-native';
import SetTitle from '@common/SetTitle/SetTitle';
import Content from '@components/__tpl__/One/Content';

class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		const { navigation } = this.props;
		return (
			<SetTitle 
				showStatusBarPlaceholder={false} 
				routeName="TplOne" 
				barProps={{ barStyle: "light-content" }}
			>
				<Content />
			</SetTitle>
		);
	}
}


export default Container;