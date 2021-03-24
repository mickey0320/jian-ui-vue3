import { App } from "vue";
import Col from "../row/src/col";

Col.install = (app: App) => {
  app.component(Col.name!, Col);
};

export default Col;
