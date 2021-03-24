import { defineComponent, h, computed, inject } from "vue";

export default defineComponent({
  name: "JCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const gutter = inject("gutter", 0);
    const classes = computed(() => {
      const cls = (["span", "offset"] as const).map((item) => {
        return `j-col-${item}-${props[item]}`;
      });
      cls.unshift("j-col");

      return cls;
    });
    const style = computed(() => {
      if (gutter !== 0) {
        return {
          paddingLeft: `${gutter / 2}px`,
          paddingRight: `${gutter / 2}px`,
        };
      }
      return {};
    });
    return () => h(props.tag, { style: style.value, class: classes.value }, slots.default?.());
  },
});
