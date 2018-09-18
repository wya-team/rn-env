import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions, StackActions } from 'react-navigation';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as types from '@constants/actions/login';
import { createForm } from 'rc-form';
import { InputItem, Toast } from 'antd-mobile-rn';
import Icon from '@common/Icon/Icon';
import { className } from '@css/root';
import { WIDTH_SCALE, HEIGHT_SCALE } from '@css/modules/dimension';

import { getItem, setItem } from '@utils/utils';
import { _global } from '@router/_global';

@createForm()
class Content extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: "",
			password: ""
		};
	}
	handleMobile = (value) => {
		this.setState({
			name: value
		});
	}
	handlePassword = (value) => {
		this.setState({
			password: value
		});
	}
	handleLogin = () => {
		// context和createForm一起用会报错，使用props传入
		const { navigation } = this.props;
		const { name, password } = this.state;
		if (!name.trim()) {
			Toast.info("请输入用户名", 1.5);
			return false;
		}
		if (!password.trim()) {
			Toast.info("请输入密码", 1.5);
			return false;
		}
		let url = types.LOGIN_MAIN_POST;
		let param = {
			name,
			password
		};
		// 模拟数据
		let localData = {
			status: 1,
			data: {
				token: "2222"
			}
		};
		let params = {
			param: param,
			ajaxType: 'POST',
			onSuccess: (res) => {
				// 用于app登录时判断
				_global.token = res.data.token;
				// 用于app进入第一次判断，请求时要带上token，所以要设置一次缓存
				setItem(`token`, {
					token: res.data.token,
				});
				try {
					const resetAction = StackActions.reset({
						index: 0,
						actions: [
							NavigationActions.navigate({ routeName: 'TabBar' }),
						],
					});
					navigation.dispatch(resetAction);
				} catch (e) {
					console.log(e);
				}
			},
			onError: (res) => {
				Toast.info(res.msg, 1.5);
			}
		};
		this.props.actions.request(url, params, { localData });
	}
	render() {
		const { getFieldProps, getFieldError } = this.props.form;
		return (
			<View style={className("g-w-full g-h-full g-bg-blue g-flex-cc")}>
				<InputItem
					{...getFieldProps('name')}
					value={this.state.name}
					type={"text"}
					placeholder="用户名"
					onChange={this.handleMobile}
					style={[styles.inputTop, styles.inputCommon, className("g-pd-h-20")]}
				>
					<Icon
						type={'user'}
						size={20}
						color={'#000'}
					/>
				</InputItem>
				<InputItem
					{...getFieldProps('password')}
					type={"password"}
					value={this.state.password}
					placeholder="密码"
					onChange={this.handlePassword}
					style={[styles.inputBottom, styles.inputCommon, className("g-pd-h-20")]}
				>
					<Icon
						type={'user'}
						size={20}
						color={'#000'}
					/>
				</InputItem>
				<TouchableOpacity
					style={[styles.buttonLogin, className("g-bg-purple g-m-v-30 g-flex-cc")]}
					onPress={this.handleLogin}
				>
					<Text style={className("g-white g-ta-c g-fs-30")}>进入课堂</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputTop: {
		borderTopLeftRadius: 10 * WIDTH_SCALE,
		borderTopRightRadius: 10 * WIDTH_SCALE,
		borderBottomWidth: 1 * StyleSheet.hairlineWidth,
		borderBottomColor: "#fff",
		borderStyle: "solid"
	},
	inputBottom: {
		borderBottomLeftRadius: 10 * WIDTH_SCALE,
		borderBottomRightRadius: 10 * WIDTH_SCALE,
	},
	inputCommon: {
		width: "80%",
		height: 90 * HEIGHT_SCALE,
		backgroundColor: "rgba(255, 255, 255, 0.4)",
		marginLeft: 0
	},
	buttonLogin: {
		width: "80%",
		height: 80 * HEIGHT_SCALE,
		borderRadius: 10 * WIDTH_SCALE
	}
});

export default Content;
