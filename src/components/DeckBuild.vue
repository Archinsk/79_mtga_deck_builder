<template>
  <div class="deck">
    Deck
    <card-mtga />
    <card-mtga />
    <card-mtga />
    <card-mtga />
    <card-mtga />
  </div>
</template>

<script>
import CardMtga from "./CardMtga";
export default {
  name: "DeckBuild",
  components: { CardMtga },
};
</script>

<style lang="scss"></style>
