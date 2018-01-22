# rn-env

- 基于 `create-react-native-app` 搭建
- 基于 `antd-mobile` UI框架，`react-navigation` 路由管理
- 基于 `redux`，`redux-persist`, `remote-redux-devtools` 数据管理
- 基于 `redux-thunk` 设计中间件的[第一个版本](https://github.com/deot/rn-env/tree/3f56c741b5d2c224bade81127457a7f9e965ca96), 基于`redux-saga`设计中间件的[第一个版本](https://github.com/deot/rn-env/tree/f26269365869085f4892b3814c83ca3130e7f887),  之后版本基于 `redux-saga` 开发

```
// 环境
- npm install -g create-react-native-app
// 切换到项目，下面两种都行
- npm install yarn -g && yarn install && yarn start // 推荐使用yarn
- npm install && npm start // 不推荐使用`cnpm`, 会导致异常
// 数据模拟
- cd src/mock && npm start

```
 
如果重新设置[路径映射](https://github.com/tleunen/babel-plugin-module-resolver), 你需要强制清理编译缓存`npm start -- --reset-cache`
## demo

![Alt text](https://raw.githubusercontent.com/wya-team/rn-env/master/demo.gif)
