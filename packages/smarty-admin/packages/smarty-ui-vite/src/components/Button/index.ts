/* eslint-disable prettier/prettier */
import Button from "./SButton";
import { App } from "vue";

// 导出 Button 组件
export { Button };

export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
