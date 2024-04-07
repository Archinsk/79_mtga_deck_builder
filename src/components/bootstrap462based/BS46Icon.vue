<!-- Версия 1.01 от 29.10.2023 -->

<template>
  <span :class="iconClass">{{ name }}</span>
</template>

<script>
export default {
  name: "VbIcon",
  props: {
    format: String,
    type: String,
    name: String,
  },
  computed: {
    iconClass() {
      let iconClass = "icon";
      if (
        (this.format === "font" && this.type === "material") ||
        (!this.format && !this.type)
      ) {
        iconClass += " material-icon";
      }
      return iconClass;
    },
  },
};
</script>

<style lang="scss" scoped>
.material-icon {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  vertical-align: calc(-0.125em + (1em - 1rem) / 20);
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

@mixin btn-square-icon {
  .icon {
    font-size: 1.5em;
    line-height: 1em;
  }
}

.btn-square {
  @include btn-square-icon;
}

@media (min-width: 576px) {
  .btn-square-sm {
    @include btn-square-icon;
  }
}

@media (min-width: 768px) {
  .btn-square-md {
    @include btn-square-icon;
  }
}

@media (min-width: 992px) {
  .btn-square-lg {
    @include btn-square-icon;
  }
}

@media (min-width: 1200px) {
  .btn-square-xl {
    @include btn-square-icon;
  }
}
</style>
