import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Toast } from '@ant-design/react-native';
import pureRender from '@utils/pure-render-decorator';

@pureRender
class Content extends React.Component {
	constructor(...params) {
		super(...params);
	}
	handleAsync = () => {
		let url = 'TPL_ZERO_ASYNC_POST';
		let param = {};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
				Toast.info('操作成功 +1', 1.5);
			},
			onError: (res) => {
				Toast.info(res.msg, 1.5);
			}
		};
		this.props.actions.request(url, params, {});
	}
	render() {
		const { actions, count } = this.props;
		return (
			<SafeAreaView>
				<Text>Chrome下载插件：RemoteDev，可观察redux的数据变化</Text>
				<Text>&nbsp;</Text>
				<Text> {count} 次数</Text>
				<Text>&nbsp;</Text>
				<Button
					onClick={() => (actions.emit('TPL_ZERO_PLUS'), Toast.info('操作成功 +1', 1.5))}
				>+</Button>
				<Button
					onClick={() => (actions.emit('TPL_ZERO_MIN'), Toast.info('操作成功 -1', 1.5))}
				>-</Button>
				<Button
					onClick={this.handleAsync}
				>异步+</Button>
			</SafeAreaView>
		);
	}
}


export default Content;