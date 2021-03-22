import Button from "@j-ui/button";
import Icon from "@j-ui/icon";
import { App } from "vue";

const components = [Button, Icon];

function install(app: App) {
  components.forEach((component) => app.component(component.name!, component));
}

export default {
  install,
};

