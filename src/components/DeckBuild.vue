<template>
  <div class="deck">
    <div class="deck-builder-column">
      <template v-for="card of deckNonLands">
        <card-mtga
          v-if="card.manaValue === 1"
          :id="card.id"
          :name="card.name"
          :imageUrl="card.imageUrl"
          :count="card.count"
          :active="card.id === activeCard.id"
          :key="card.id"
          @click="activateCard(card)"
        ></card-mtga>
      </template>
    </div>
    <div class="deck-builder-column">
      <template v-for="card of deckNonLands">
        <card-mtga
          v-if="card.manaValue === 2"
          :id="card.id"
          :name="card.name"
          :imageUrl="card.imageUrl"
          :count="card.count"
          :active="card.id === activeCard.id"
          :key="card.id"
          @click="activateCard(card)"
        ></card-mtga>
      </template>
    </div>
    <div class="deck-builder-column">
      <template v-for="card of deckNonLands">
        <card-mtga
          v-if="card.manaValue === 3"
          :id="card.id"
          :name="card.name"
          :imageUrl="card.imageUrl"
          :count="card.count"
          :active="card.id === activeCard.id"
          :key="card.id"
          @click="activateCard(card)"
        ></card-mtga>
      </template>
    </div>
    <div class="deck-builder-column">
      <template v-for="card of deckNonLands">
        <card-mtga
          v-if="card.manaValue === 4"
          :id="card.id"
          :name="card.name"
          :imageUrl="card.imageUrl"
          :count="card.count"
          :active="card.id === activeCard.id"
          :key="card.id"
          @click="activateCard(card)"
        ></card-mtga>
      </template>
    </div>
    <div class="deck-builder-column">
      <template v-for="card of deckNonLands">
        <card-mtga
          v-if="card.manaValue === 5"
          :id="card.id"
          :name="card.name"
          :imageUrl="card.imageUrl"
          :count="card.count"
          :active="card.id === activeCard.id"
          :key="card.id"
          @click="activateCard(card)"
        ></card-mtga>
      </template>
    </div>
    <div class="deck-builder-column">
      <template v-for="card of deckNonLands">
        <card-mtga
          v-if="card.manaValue >= 6"
          :id="card.id"
          :name="card.name"
          :imageUrl="card.imageUrl"
          :count="card.count"
          :active="card.id === activeCard.id"
          :key="card.id"
          @click="activateCard(card)"
        ></card-mtga>
      </template>
    </div>

    <div class="deck-builder-column">
      <card-mtga
        v-for="card of deckLands"
        :id="card.id"
        :name="card.name"
        :imageUrl="card.imageUrl"
        :count="card.count"
        :active="card.id === activeCard.id"
        :key="card.id"
        @click="activateCard(card)"
      ></card-mtga>
    </div>
    <div class="deck-builder-column">
      <card-mtga
        v-for="card of deck.sideBoard"
        :id="card.id"
        :name="card.name"
        :imageUrl="card.imageUrl"
        :count="card.count"
        :active="card.id === activeCard.id"
        :key="card.id"
        @click="activateCard(card)"
      ></card-mtga>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import CardMtga from "./CardMtga";
export default {
  name: "DeckBuild",
  components: { CardMtga },

  computed: {
    ...mapState(["deck", "activeCard"]),
    ...mapGetters(["deckLands", "deckNonLands"]),
  },

  methods: {
    ...mapMutations(["activateCard"]),
  },
};
</script>

<style lang="scss"></style>
