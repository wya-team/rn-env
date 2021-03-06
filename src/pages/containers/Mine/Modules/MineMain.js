import React from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@ant-design/react-native';
import SetTitle from '@common/SetTitle/SetTitle';
import Keyboard from '@common/Keyboard/Keyboard';

import { SafeAreaView } from 'react-navigation';
import * as creators from '@stores/actions';
import Content from '@components/__tpl__/Two/Content';
import PullRefresh from '@common/PullRefresh/examples/Basic';
import { TAB_BAR_HEIGHT } from '@constants/constants';

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
			<SetTitle 
				barProps={{ barStyle: 'light-content' }}
				routeName="MineMain" 
			>
				<PullRefresh />
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