import React, { Component } from 'react';
import { Asset, Constants, ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import {
	Animated,
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Text,
	StatusBar,
	View,
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollY: new Animated.Value(0),
		};
	}
	render() {
		const { navigation } = this.props;

		const scale = this.state.scrollY.interpolate({
			inputRange: [-450, 0, 100],
			outputRange: [2, 1, 0.8],
			extrapolate: 'clamp',
		});

		const translateY = this.state.scrollY.interpolate({
			inputRange: [-450, 0, 100],
			outputRange: [-150, 0, 40],
		});

		const opacity = this.state.scrollY.interpolate({
			inputRange: [0, 50],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		});

		const underlayOpacity = this.state.scrollY.interpolate({
			inputRange: [0, 50],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		});

		const backgroundScale = this.state.scrollY.interpolate({
			inputRange: [-450, 0],
			outputRange: [3, 1],
			extrapolate: 'clamp',
		});

		const backgroundTranslateY = this.state.scrollY.interpolate({
			inputRange: [-450, 0],
			outputRange: [0, 0],
		});

		return (
			<View style={{ flex: 1 }}>
				<Animated.ScrollView
					style={{ flex: 1 }}
					scrollEventThrottle={1}
					onScroll={Animated.event(
						[
							{
								nativeEvent: { contentOffset: { y: this.state.scrollY } },
							},
						],
						{ useNativeDriver: true }
					)}
				>
					<Animated.View
						style={[
							styles.backgroundUnderlay,
							{
								transform: [
									{ scale: backgroundScale },
									{ translateY: backgroundTranslateY },
								],
							},
						]}
					/>
					<Animated.View style={{ opacity, transform: [{ scale }, { translateY }] }}>
						<SafeAreaView
							style={styles.bannerContainer}
							forceInset={{ top: 'always', bottom: 'never' }}
						>
							<View style={styles.banner}>
								<Text style={styles.bannerTitle}>
									React Navigation Examples
								</Text>
							</View>
						</SafeAreaView>
					</Animated.View>
				</Animated.ScrollView>
				<StatusBar barStyle="light-content" />
				<Animated.View
					style={[styles.statusBarUnderlay, { opacity: underlayOpacity }]}
				/>
			</View>
		);
	}
}



const styles = StyleSheet.create({
	item: {
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	itemContainer: {
		backgroundColor: '#fff',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ddd',
	},
	image: {
		width: 120,
		height: 120,
		alignSelf: 'center',
		marginBottom: 20,
		resizeMode: 'contain',
	},
	statusBarUnderlay: {
		backgroundColor: '#673ab7',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: Constants.statusBarHeight,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#444',
	},
	description: {
		fontSize: 13,
		color: '#999',
	},
	backgroundUnderlay: {
		backgroundColor: '#673ab7',
		position: 'absolute',
		top: -100,
		height: 300,
		left: 0,
		right: 0,
	},
	bannerContainer: {
		// backgroundColor: '#673ab7',
		alignItems: 'center',
	},
	banner: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
	},
	bannerImage: {
		width: 36,
		height: 36,
		resizeMode: 'contain',
		tintColor: '#fff',
		margin: 8,
	},
	bannerTitle: {
		fontSize: 18,
		fontWeight: '200',
		color: '#fff',
		marginVertical: 8,
		marginRight: 5,
	},
});

export default Content;