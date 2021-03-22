declare module "*.vue" {
  import { defineComponent, App } from "vue";
  const Component: ReturnType<typeof defineComponent> & { install: (app: App) => void };

  export default Component;
}
