import Icon from "./src/icon.vue";

Icon.install = (app) => {
  app.component(Icon.name!, Icon);
};

export default Icon;
