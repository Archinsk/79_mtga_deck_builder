<!-- Версия 1.01 от 29.10.2023 -->

<template>
  <span
    v-if="!(notNullDisplay && !value) && typeof value !== 'undefined'"
    :class="badgeClass"
    >{{ roundedValue }}</span
  >
  <span v-else :class="badgeClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "VbBadge",
  props: {
    theme: String,
    pill: Boolean,
    value: Number,
    max: Number,
    notNullDisplay: Boolean,
  },
  computed: {
    badgeClass() {
      let badgeClass = "badge";
      if (this.theme) {
        badgeClass += ` badge-${this.theme}`;
      }
      if (this.pill) {
        badgeClass += " badge-pill";
      }
      return badgeClass;
    },
    roundedValue() {
      if (this.max && this.value > this.max) {
        return this.max + "+";
      } else {
        return this.value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  .badge {
    position: absolute;
    font-size: 62.5%;
    top: 0.1em;
    right: -0.7em;
  }
}
</style>
