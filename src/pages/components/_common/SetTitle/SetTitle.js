import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon } from 'antd-mobile';
const BAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const LOLLIPOP = 21;

const styles = StyleSheet.create({
	appbar: {
		flexDirection: 'row',
		alignItems: 'center',
		height: BAR_HEIGHT,
		// marginTop: Platform.OS === 'ios' ? 20 : 0,
		backgroundColor: '#fff',
		elevation: 1,
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowRadius: StyleSheet.hairlineWidth,
		shadowOffset: {
			height: StyleSheet.hairlineWidth,
		},
		borderBottomColor: 'rgba(0, 0, 0, 0.16)',
		borderBottomWidth:
			Platform.OS === 'android' && Platform.Version < LOLLIPOP
				? StyleSheet.hairlineWidth
				: 0,
		zIndex: 1,
	},
	icon: {
		color: '#222',
	},

	button: {
		height: BAR_HEIGHT,
		width: BAR_HEIGHT - 8,
		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		color: '#222',
		fontSize: Platform.OS === 'ios' ? 16 : 18,
	},

	content: {
		flex: 1,
		alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
		justifyContent: 'center',
		marginHorizontal: 8,
	},
});

class SetTitle extends PureComponent{
	constructor(params) {
		super(...params);
	}
	handleGoBack = () => {
	  this.context.navigation.goBack(null);
	};
	render() {
		const { style, title } = this.props;
		return (
			<SafeAreaView>
				<View style={[styles.appbar, style]}>
					<TouchableOpacity
						borderless
						style={styles.button}
						onPress={this.handleGoBack}
					>
						<Text>{`<`}</Text>
					</TouchableOpacity>
					<View style={styles.content}>
						{
							typeof title === 'string' 
								? (
									<Text numberOfLines={1} style={styles.title}>
										{title}
									</Text>
								) 
								: (
									title
								)
						}
					</View>
					<View style={styles.button} />
				</View>
				{this.props.children}
			</SafeAreaView>

		);
	}
}
SetTitle.contextTypes = {
	navigation: PropTypes.object
};
export default SetTitle;