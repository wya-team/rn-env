import React from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import SetTitle from '@common/SetTitle/SetTitle';
import { SafeAreaView } from 'react-navigation';
import * as creators from '@actions/mine';
import Content from '@components/__tpl__/Two/Content';
class Container extends React.Component {
	constructor(...params) {
		super(...params);
	}
	componentDidMount() {
		// 此处没有ajax, 模式为{lazy: true}, bug需要触发一次, 勿删
		this.props.dispatch({
			type: 'LOAD'
		});
	}
	render() {
		return (
			<SetTitle barProps={{ barStyle: 'light-content' }} routeName="MineMain">
				<Text>Test22</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Content routeName="MineMain"/>
			</SetTitle>
		);
	}
}



const mapStateToProps = (state, ownProps) => {
	return {
		mineMain: state.mineMain
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);