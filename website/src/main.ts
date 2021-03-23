import { createApp } from "vue";

import App from "./App.vue";
import JUI from "j-ui";
// import JUI from "../../lib/index.js";
import "theme-chalk/src/index.scss";

createApp(App).use(JUI).mount("#app");
