import { App } from "vue";
import Button from "./button/index";
import TsxButton from "./button/tsxButton";
import SFCButton from "./button/button.vue";

export default {
    install(app: App): void {
        app.component(Button.name, Button);
        app.component(TsxButton.name, TsxButton);
        app.component(SFCButton.name, SFCButton);
    }
}

// 导出导读组件
export { Button, TsxButton, SFCButton };
