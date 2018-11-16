import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		height: 48,
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 4,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 24,
	},
});
/**
 * 自定义栈
 */
const config = [
	{
		name: '自定义-'
	},
	{
		name: '自定义-'
	}
];
export const Bar = ({ navigation }) => {
	const { routes, index: active } = navigation.state;
	return (
		<View style={styles.tabContainer}>
			{
				routes.map((item, index) => {
					const { routeName } = item;
					const { name } = config[index];
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate(routeName)}
							style={styles.tab}
							key={routeName}
						>
							<Text>{name}{routeName}</Text>
						</TouchableOpacity>
					);
				})
			}
		</View>
	);
};
