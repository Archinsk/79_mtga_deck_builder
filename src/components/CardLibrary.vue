<template>
  <div class="card-library">
    CardLibrary
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
  name: "CardLibrary",
  components: { CardMtga },
};
</script>

<style lang="scss"></style>
