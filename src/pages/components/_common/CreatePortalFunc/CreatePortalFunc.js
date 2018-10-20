import React, { Component, } from 'react';
import { View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

export default (options = {}) => Viewer => {
	return Target = {
		viewer: null, // 只会存在一个viewer，除非需要数组;
		show(opts = {}) {
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
				this.viewer = new RootSiblings( <Viewer {...opts} /> );
			});
		},
		close() {
			if (this.viewer instanceof RootSiblings) {
				this.viewer.destroy();
				this.viewer = null;
			}
		},
		popup(opts) {
			if (typeof opts !== 'object') {
				return console.error('opts is not object');
			}
			return Tpl.show(opts);
		}
	};
};

