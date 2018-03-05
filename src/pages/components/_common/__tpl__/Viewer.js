import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import * as types from '@constants/actions/agent';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';
import { className } from '@css/root';
import { InputItem, Toast } from 'antd-mobile';

class Viewer extends Component {
	constructor() {
		super(...arguments);
		this.handleAmount = this.handleAmount.bind(this);
		this.handleRemark = this.handleRemark.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.state = {
			tab: 1,
			amount: 0,
			remark: "",
		};
	}

	componentDidMount(){
	};

	componentWillReceiveProps(nextProps){
	};

	componentWillUnmount ()  {
	};
	handleClose = () => {
		this.props.onClose();
	}
	handleTab(tab) {
		this.setState({
			tab: tab
		});
	}
	handleAmount(value) {
		this.setState({
			amount: value
		});
	}
	handleRemark(value) {
		this.setState({
			remark: value
		});
	}
	handleConfirm() {
		const { param } = this.props;
		const { amount, remark, tab } = this.state;
		if (!remark.trim()) {
			this.props.onClose();
			Toast.info("备注必填", 1.5);
			return;
		}
		let url = types.AGENT_CHANGE_AMOUNT_POST;
		let newParam = {
			...param,
			opt_type: tab,
			amount,
			remark
		};
		let params = {
			param: newParam,
			ajaxType: "POST",
			onSuccess: (res) => {
				this.props.onClose();
				Toast.info(res.msg, 1.5);
			},
			onError: (res) => {
				Toast.info(res.msg, 1.5);
			}
		};
		this.props.actions.request(url, params, {});
	}
	render() {
		const { tab } = this.state;
		const { user_name, goods_money, balance, param: { type } } = this.props;
		return (
			<View style={{ ...className("g-p-a g-l-0 g-r-0 g-t-0 g-b-0 g-flex-cc"), backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
				<View style={{ ...className("g-flex g-ai-c g-bg-light"), width: "80%", borderRadius: 10 * HEIGHT_SCALE }}>
					<View>
						<View style={{ ...className("g-fd-r") }}>
							<TouchableOpacity
								onPress={() => { this.handleTab(1); }}
								style={{ ...className("g-col g-ai-c g-pd-v-30"), borderBottomWidth: 3 * HEIGHT_SCALE, borderBottomColor: tab == 1 ? "#585ad1" : "#ddd" }}
							>
								<Text>{type == 1 ? "增加收入" : "增加货款"}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => { this.handleTab(2); }}
								style={{ ...className("g-col g-ai-c g-pd-v-30"), borderBottomWidth: 3 * HEIGHT_SCALE, borderBottomColor: tab == 2 ? "#585ad1" : "#ddd" }}
							>
								<Text>{type == 1 ? "减少收入" : "减少货款"}</Text>
							</TouchableOpacity>
						</View>
						<View style={{ width: "100%" }}>
							<Text style={{ ...className("g-m-l-25 g-m-t-20") }}>
								{
									type == 1 ? (
										`${user_name}的收入：${balance}`
									) : (
										`${user_name}的货款余额：${goods_money}`
									)
								}
							</Text>
							<InputItem
								placeholder={type == 1 ? "请输入收入" : "请输入金额"}
								type={"number"}
								style={{ width: "90%", ...className("g-m-t-20") }}
								onChange={this.handleAmount}
							>
								<Text>
									{
										type == 1 ? (
											tab == 1 ? "增加收入" : "减少收入"
										) : (
											tab == 1 ? "增加金额" : "减少金额"
										)
									}
								</Text>
							</InputItem>
							<InputItem
								placeholder="备注不能为空"
								style={{ width: "90%", ...className("g-m-t-20") }}
								onChange={this.handleRemark}
							>
								<Text>备注</Text>
							</InputItem>
							<View style={{ ...className("g-fd-r g-pd-v-30"), width: "100%" }}>
								<TouchableOpacity
									onPress={this.handleClose}
									style={{ ...className("g-col g-flex-cc") }}
								>
									<Text style={{ color: "#666" }}>取消</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={this.handleConfirm}
									style={{ ...className("g-col g-flex-cc") }}
								>
									<Text style={{ ...className("g-purple") }}>确定</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

Viewer.propTypes = {
};

Viewer.defaultProps = {
};
export default Viewer;
