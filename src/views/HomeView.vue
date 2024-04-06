<template>
  <div id="home-view">
    <side-bar />
    <main>
      <card-filter />
      <card-library />
      <deck-build />
    </main>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import CardFilter from "../components/CardFilter";
import CardLibrary from "../components/CardLibrary";
import DeckBuild from "../components/DeckBuild";

export default {
  name: "HomeView",
  components: { SideBar, CardFilter, CardLibrary, DeckBuild },
};
</script>
