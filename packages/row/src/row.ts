import { defineComponent, h, provide, computed } from "vue";

export default defineComponent({
  name: "JRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: "start",
    },
  },
  setup(props, { slots }) {
    provide("gutter", props.gutter);
    const classes = computed(() => ["j-row"]);
    const style = computed(() => {
      if (props.gutter !== 0) {
        return {
          marginLeft: `-${props.gutter / 2}px`,
          marginRight: `-${props.gutter / 2}px`,
        };
      }
      return {};
    });
    return () =>
      h(
        props.tag,
        {
          class: classes.value,
          style: style.value,
        },
        slots.default?.()
      );
  },
});
