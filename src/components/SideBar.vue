<template>
  <aside class="sidebar">
    Sidebar
    <decks-list-item />
    <decks-list-item />
    <decks-list-item />
    <decks-list-item />
  </aside>
</template>

<script>
import DecksListItem from "./DecksListItem";
export default {
  name: "SideBar",
  components: { DecksListItem },
};
</script>

<style lang="scss"></style>
