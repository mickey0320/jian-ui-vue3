<template>
  <button :class="classes">
    <i v-if="loading" class="j-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import Vue, { defineComponent, PropType, computed } from "vue";
type ButtonType = "primary" | "warning" | "info" | "error" | "success" | "danger" | "default";
export default defineComponent({
  name: "JButton",
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "primary",
      validator: (val: string) => {
        return ["primary", "warning", "info", "error", "success", "danger", "default"].includes(val);
      },
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classes = computed(() => [
      "j-button",
      `j-button--${props.type}`,
      {
        "is-disabled": props.disabled,
        "is-loading": props.loading,
        "is-round": props.round,
      },
    ]);

    return {
      classes,
    };
  },
});
</script>
