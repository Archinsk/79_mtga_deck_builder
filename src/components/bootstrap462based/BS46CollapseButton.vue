<!-- Версия 1.01 от 30.10.2023 -->

<template>
  <vb-button
    class="btn-collapse"
    type="button"
    :theme="theme"
    :size="size"
    :block="block"
    :square="square"
    :icon="icon"
    data-toggle="collapse"
    :data-target="'#' + targetId"
    aria-expanded="false"
    :aria-controls="targetId"
    @click="$emit('click')"
  >
    <slot></slot>
  </vb-button>
</template>

<script>
import VbButton from "./BS46Button";
export default {
  name: "VbCollapseButton",
  components: { VbButton },
  props: {
    targetId: String,
    theme: String,
    size: String,
    block: Boolean,
    square: Boolean,
    icon: [Object, String],
  },
};
</script>
