import { defineComponent, openBlock, createBlock } from 'vue';

var script$1 = defineComponent({
    name: "JButton",
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, "button"))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};

var script = defineComponent({
    name: "JIcon",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", {
    class: `j-icon-${_ctx.name}`
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};

const components = [script$1, script];
function install(app) {
    components.forEach((component) => app.component(component.name, component));
}
var index = {
    install,
};

export default index;
