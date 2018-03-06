import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'antd-mobile';
import SetTitle from '@common/SetTitle/SetTitle';
import * as creators from '@actions/__tpl__';
import Content from '@components/__tpl__/Zero/Content';

class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	render() {
		const { navigation, tplZero = {}, actions } = this.props;
		return (
			<SetTitle title="00">
				<Content 
					actions={actions}
					count={tplZero.count}
				/>
			</SetTitle>
			
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		tplZero: state.tplZero
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);