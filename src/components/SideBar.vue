<template>
  <aside class="sidebar">
    Sidebar
    <decks-list-item />
    <decks-list-item />
    <decks-list-item />
    <decks-list-item />
    <DeckInfo />
  </aside>
</template>

<script>
import DecksListItem from "./DecksListItem";
import DeckInfo from "./DeckInfo";
export default {
  name: "SideBar",
  components: { DecksListItem, DeckInfo },
};
</script>

<style lang="scss"></style>
