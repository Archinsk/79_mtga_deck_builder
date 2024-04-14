<!-- Версия 1.01 от 30.10.2023 -->

<template>
  <div
    class="collapse"
    :id="id"
    :data-parent="parentId ? '#' + parentId : null"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VbCollapse",
  props: {
    id: String,
    parentId: String,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-collapse {
    flex-grow: unset;
  }
}
</style>
