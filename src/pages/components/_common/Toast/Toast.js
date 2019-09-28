import React, { Component, } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import Core from './Core';

class Toasts extends Component {
	static propTypes = Core.propTypes;

	static info = (message, opts = {}) => {
		return new RootSiblings(
			<Core
				{...opts}
				visible={true}
			>
				<Text style={{ color: "white" }}>{message}</Text>
			</Core>
		);
	};

	static hide = toast => {
		if (toast instanceof RootSiblings) {
			toast.destroy();
		} else {
			console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
		}
	};

	static loading = () => {
		return new RootSiblings(
			<Core visible={true} duration={0} containerStyle={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator 
					size="large" 
					color="white" 
				/>
			</Core>
		);
	}
	constructor(...params) {
		super(...params);
		this._toast = null;
	}

	// componentWillMount(){
	// 	this._toast = new RootSiblings(
	// 		<Core
	// 			{...this.props}
	// 			duration={0}
	// 		/>
	// 	);
	// };

	// componentWillReceiveProps(nextProps){
	// 	this._toast.update(
	// 		<Core
	// 			{...nextProps}
	// 			duration={0}
	// 		/>
	// 	);
	// };

	// componentWillUnmount = () => {
	// 	this._toast.destroy();
	// };

	render() {
		return null;
	}
}

export default Toasts;