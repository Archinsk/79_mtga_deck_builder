<template>
  <div v-if="imageUrl" :class="cardClass" @click="$emit('click')">
    <img :src="imageUrl" />
    <div class="card-count">
      <vb-button theme="light" size="sm" square>-</vb-button>
      <div class="card-count-number">x{{ count }}</div>
      <vb-button theme="light" size="sm" square>+</vb-button>
    </div>
  </div>
  <div v-else class="decks-list-item">{{ name }}</div>
</template>

<script>
import VbButton from "./bootstrap462based/BS46Button";
export default {
  name: "CardMtga",
  components: { VbButton },
  props: ["id", "name", "imageUrl", "count", "active"],

  computed: {
    cardClass() {
      let cardClass = "decks-list-item";
      if (this.count > 1) {
        cardClass += " multiple";
      }
      if (this.active) {
        cardClass += " active";
      }
      return cardClass;
    },
  },
};
</script>

<style lang="scss"></style>
