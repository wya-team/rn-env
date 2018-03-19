import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { InputItem, Toast } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@actions/login';
import * as types from '@constants/actions/login';
import { className } from '@css/root';
import SetTitle from '@common/SetTitle/SetTitle';
import Content from '@components/Login/Content';

class Container extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const { navigation, actions } = this.props;
		return (
			<SetTitle showStatusBarPlaceholder={false} routeName="LoginMain">
				<Content navigation={navigation} actions={actions} />
			</SetTitle>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		login: state.login
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);