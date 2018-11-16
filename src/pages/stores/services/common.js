import React, { Component } from 'react';
import net from '@utils/net';
import API_ROOT from '../apis/root';
import { serviceObj, serviceCompare, initTreeData } from '@utils/utils';

export let region =  { ...serviceObj };

export const services = {
	loadRegion(param = {}) {
		let { type } = param;
		return net.ajax({
			url: API_ROOT['_COMMON_REGION_GET'],
			type: 'GET',
			localData: serviceCompare(param, region),
			param,
			noLoading: true
		}).then((res) => {
			res = {
				...res,
				data: initTreeData(res.data, 'national_code', 'region_name', 'children')
			};
			region = {
				...region,
				data: res
			};
			return res;
		}).catch((res) => {
			return res;
		});
	},
};
