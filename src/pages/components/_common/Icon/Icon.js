import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import iconObj from '@constants/iconfont';

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { type, size, color, tag: Tag, onPress, style, styleIcon,  ...rest } = this.props;
		Tag = Tag || (onPress ? TouchableOpacity : View);
		return (
			<Tag onPress={onPress} {...rest} style={[{ alignItems: "center", justifyContent: "center" }, style]}>
				<Text
					style={[
						styles.icon, 
						{ 
							color: typeof color === `object` ? color.color : color,
							fontSize: size
						},
						styleIcon
					]}
				>{iconObj[type]}</Text>	
			</Tag>
		);
	}
}


Icon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	type: PropTypes.string,
	tag: PropTypes.func,
};
Icon.defaultProps = {
	color: "#000",
	size: 20
};
const styles = StyleSheet.create({
	icon: {
		fontFamily: "iconfont"
	}
});

export default Icon;