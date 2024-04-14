<template>
  <div class="card">
    <div v-if="header" class="card-header">
      <slot name="card-header"></slot>
    </div>
    <div v-if="imagePosition === 'full'" class="card-img-overlay">
      <slot></slot>
    </div>
    <template v-if="imagePosition === 'top' || imagePosition === 'full'">
      <slot name="card-image"></slot>
    </template>
    <div v-if="!noBody" class="card-body">
      <slot name="card-body"></slot>
    </div>
    <template v-if="imagePosition === 'bottom'">
      <slot name="card-image"></slot>
    </template>
    <div v-if="footer" class="card-footer">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VbCard",
  props: {
    header: Boolean,
    noBody: Boolean,
    footer: Boolean,
    imagePosition: String,
  },
};
</script>
