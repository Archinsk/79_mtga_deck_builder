<template>
  <div class="card-library">
    CardLibrary
    <!-- <template v-if="deckInfo">
      <span v-for="card of deckInfo" :key="card.id">{{ card.id }}</span>
    </template> -->
    <button type="button" @click="calculateChances">Get Variants</button>
    <span v-if="variants">{{ variants }}</span>
    <card-mtga />
  </div>
</template>

<script>
import CardMtga from "./CardMtga";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "CardLibrary",
  components: { CardMtga },
  computed: {
    ...mapState(["importedDeck", "variants"]),
    ...mapGetters([]),
  },
  methods: {
    ...mapMutations(["calculateChances"]),
  },
};
</script>

<style lang="scss"></style>
