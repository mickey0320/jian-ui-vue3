<template>
  <i :class="`j-icon-${name}`"></i>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
export default defineComponent({
  name: "JIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
});
</script>
