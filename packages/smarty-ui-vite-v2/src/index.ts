import { createApp } from "vue";

import SButton from "./button/index";
import SFCButton from "./button/button.vue";
import TsxButton from "./button/tsxButton";
import Layout from "./Layout";
import MyUI from "./entry";

// createApp(TsxButton).mount('#root')

const TsxButtonWrapper = createApp(Layout).use(MyUI).mount("#root");
