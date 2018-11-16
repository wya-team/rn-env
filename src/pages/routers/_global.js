export const _global = {
	version: '1.0.0',
	token: null,
	APIS: {},
	initApis: () => {
		for (let i in this.APIS) {
			if (this.APIS[i] && this.APIS.hasOwnProperty(i)) {
				this.APIS[i].destroy();
				delete this.APIS[i];
			}
		}
	},
	dispatch: () => {}
};
