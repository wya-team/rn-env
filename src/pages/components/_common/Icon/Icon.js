import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { iconObj, imageObj } from '@constants/iconfont';

import { WIDTH_SCALE } from '@css/modules/dimension';
class Icon extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		let { type, size, color, tag: Tag, onPress, style, styleIcon, image, ...rest } = this.props;
		Tag = Tag || (onPress ? TouchableOpacity : View);
		if (!type) {
			return null;
		}
		return (
			<Tag onPress={onPress} {...rest} style={[{ alignItems: "center", justifyContent: "center" }, style]}>
				{
					image 
						? (
							<Image
								style={[
									{ 
										width: size * WIDTH_SCALE,
										height: size * WIDTH_SCALE,
									},
									styleIcon
								]}
								source={imageObj[type]}
							/>
						)
						: (
							<Text
								style={[
									styles.icon, 
									{ 
										color: typeof color === `object` ? color.color : color,
										fontSize: size * WIDTH_SCALE
									},
									styleIcon
								]}
							>{iconObj[type]}</Text>
						)
				}
				
			</Tag>
		);
	}
}


Icon.propTypes = {
	// style: PropTypes.object,
	styleIcon: PropTypes.object,
	color: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	size: PropTypes.number,
	type: PropTypes.string,
	tag: PropTypes.func,
	image: PropTypes.bool
};
Icon.defaultProps = {
	color: "#000",
	size: 44,
	image: false,
};
const styles = StyleSheet.create({
	icon: {
		fontFamily: "iconfont"
	}
});

export default Icon;