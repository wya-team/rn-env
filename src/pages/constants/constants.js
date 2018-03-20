import { Platform } from 'react-native';
/**
 * 目前在开发环境可以使用Redux Devtools。
 * 可以在src/page/xxx/constatns/constants.js中的DEBUG里控制开关
 * true开启，false关闭。
 */
export const DEBUG = !0;
/**
 * 开发模式结合后端
 * true开启，false关闭
 * 即!0后端。!1前端:3000端口
 */
export const DEV_WITH_SERVER = !1;



/**
 * Tab Bar的高度
 */
export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 55 : 54;

