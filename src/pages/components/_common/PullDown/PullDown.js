import React, { Component } from 'react';
import { Asset, Constants, ScreenOrientation } from 'expo';
// ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

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
let ExampleRoutes = {};
class PullDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollY: new Animated.Value(0),
		};
	}
	render() {
		const { navigation, height } = this.props;

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
								height: height || 320
							},
						]}
					/>
					<Animated.View
						style={{ opacity, transform: [{ scale }, { translateY }] }}
					>
						<SafeAreaView forceInset={{ top: 'always', bottom: 'never' }}>
							{this.props.children[0] || this.props.children}
						</SafeAreaView>
					</Animated.View>
					<SafeAreaView forceInset={{ bottom: 'always', horizontal: 'never' }}>
						{this.props.children[1]}
					</SafeAreaView>
				</Animated.ScrollView>
				<Animated.View
					style={[styles.statusBarUnderlay, { opacity: underlayOpacity }]}
				/>
			</View>
		);
	}
}



const styles = StyleSheet.create({
	statusBarUnderlay: {
		backgroundColor: '#673ab7',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: Constants.statusBarHeight,
	},
	backgroundUnderlay: {
		backgroundColor: '#673ab7',
		position: 'absolute',
		top: -100,
		left: 0,
		right: 0,
	}
});

export default PullDown;