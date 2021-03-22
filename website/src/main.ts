import { createApp } from "vue";

import App from "./App.vue";
import JUI from "j-ui";
// import JUI from "../../lib/index.js";
import "theme-chalk/lib/index.css";

createApp(App).use(JUI).mount("#app");
