import React from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import SetTitle from '@common/SetTitle/SetTitle';
import * as creators from '@actions/home';

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
		const { navigation } = this.props;
		return (
			<SetTitle barProps={{ barStyle: 'dark-content' }} routeName="HomeMain">
				<Button
					onClick={() => navigation.navigate('TplMain')}
				>模版页面</Button>
			</SetTitle>
		);
	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		homeMain: state.homeMain,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);