import React, { Component, } from 'react';
import { View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import Core, { positions, durations } from './Core';

class Toast extends Component {
	static propTypes = Core.propTypes;
	static positions = positions;
	static durations = durations;

	static show = (message, options = { position: positions.BOTTOM, duration: durations.SHORT }) => {
		return new RootSiblings(
			<Core
				{...options}
				visible={true}
			>
				{message}
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

export default Toast;