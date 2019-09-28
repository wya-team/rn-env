module.exports = function(api) {
	api.cache(true);

	return {
		"presets": [
			"babel-preset-expo"
		],
		"plugins": [
			["@babel/plugin-transform-flow-strip-types"],
			["@babel/plugin-proposal-decorators", { "legacy": true }],
			["@babel/plugin-proposal-class-properties", { "loose": true }],
			[
				"import",
				{
					"libraryName": "@ant-design/react-native"
				},
				"@ant-design/react-native"
			],
			[
				"module-resolver",
				{
					"root": ["./src"],
					"extensions": [".js", ".ios.js", ".android.js", ".png"],
					"alias": {
						"@assets": "./src/assets",
						"@css": "./src/css",
						"@images": "./src/images",
						"@components": "./src/pages/components",
						"@common": "./src/pages/components/_common",
						"@constants": "./src/pages/constants",
						"@containers": "./src/pages/containers",
						"@routers": "./src/pages/routers",
						"@stores": "./src/pages/stores",
						"@services": "./src/pages/stores/services",
						"@utils": "./src/pages/utils",
						"pure-render-decorator": "./src/pages/utils/pure-render-decorator"
					}
				}
			]
		]
	};
};