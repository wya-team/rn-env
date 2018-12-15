import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Popup from '@components/_common/Popup/Popup';
import ToastTest from '@components/_common/Toast/examples/Test';
import CreatePortalFunc from '@components/_common/CreatePortalFunc/CreatePortalFunc';

@CreatePortalFunc({})
class Func extends React.Component {
	constructor(...params) {
		super(...params);
	}
	handlePress = async () => {	
		this.props.onClose();
	}
	render() {
		return (
			<Popup onClose={this.handlePress}>
				<ToastTest />
			</Popup>
		);
	}
}
Func.contextTypes = {
	navigation: PropTypes.object
};
export default Func;