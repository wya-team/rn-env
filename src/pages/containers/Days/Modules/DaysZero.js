import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'antd-mobile';

import * as creators from '@actions/days';
import Content from '@components/Days/Zero/Content';

class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		const { navigation, daysZero = {}, actions } = this.props;
		return (
			<Content 
				actions={actions}
				count={daysZero.count}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		daysZero: state.daysZero
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);