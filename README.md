# rn-env

- 基于 `create-react-native-app` 搭建
- 基于 `antd-mobile` UI框架，`react-navigation` 路由管理
- 基于 `redux`，`redux-persist`, `remote-redux-devtools` 数据管理

```shell
# 环境
npm install -g create-react-native-app
npm run start

# 数据模拟
cd src/mock && npm start
```
 
如果重新设置[路径映射](https://github.com/tleunen/babel-plugin-module-resolver), 你需要强制清理编译缓存`npm start -- --reset-cache`
## 问题处理
- 真机模式，要在电脑上debugger

```shell
# iOS与安卓debugger
http://localhost:19001/debugger-ui/
		↓ ↓ ↓ ↓ ↓ ↓
http://[本机ip]:19001/debugger-ui/ 

# 然后刷新下真机页面

# 安卓如果有问题，可以试试这个
adb reverse tcp:19001 tcp:19001
```
- `::ffff:127.0.0.1 - - [22/Jan/2018:09:10:17 +0000] "GET /debug HTTP/1.1" 404 18 "-" "-"`

```shell
# 暂时不知道具体原因, 终端先执行以下命令
export http_proxy="http://127.0.0.1"
```

