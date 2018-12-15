import React, { Component, } from 'react';
import { View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

export default (options = {}) => Viewer => {
	let viewer = null; // 只会存在一个viewer，除非需要数组;

	return class Target {
		static show(opts = {}) {
			return new Promise((resolve, reject) => {
				this.close();
				opts = {
					...opts,
					show: true,
					onCloseSoon: () => {
						this.close();
					},
					onSure: (res) => {
						opts.onCloseSoon();
						resolve(res);
					},
					onClose: (res) => {
						opts.onCloseSoon();
						reject(res);
					},
				};
				viewer = new RootSiblings( <Viewer {...opts} /> );
			});
		}
		static close() {
			if (viewer instanceof RootSiblings) {
				viewer.destroy();
				viewer = null;
			}
		}
		static popup(opts) {
			if (typeof opts !== 'object') {
				return console.error('opts is not object');
			}
			return Target.show(opts);
		}
	};
};

