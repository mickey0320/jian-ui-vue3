import { App } from "vue";
import Button from "@j-ui/button";
import Icon from "@j-ui/icon";
import Row from "@j-ui/row";
import Col from "@j-ui/col";

const components = [Button, Icon, Row, Col];

function install(app: App) {
  components.forEach((component) => app.component(component.name!, component));
}

export default {
  install,
};
