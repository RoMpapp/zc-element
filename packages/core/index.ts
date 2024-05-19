import { makeInstaller } from "@zc-element/utils";
import components from "./components";
import '@zc-element/theme/index.css'

// 通过makeInstaller方法将components数组中的所有组件注册到app上
const installer = makeInstaller(components);
// 导出所有组件
export * from "@zc-element/components";
// 导出installer
export default installer