import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
import { className } from '@css/root';
import { InputItem, Toast } from 'antd-mobile';

class Viewer extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		return (
			<View>
				<Text>2222</Text>
			</View>
		);
	}
}

Viewer.propTypes = {
};

Viewer.defaultProps = {
};
export default Viewer;
