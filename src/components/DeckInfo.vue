<template>
  <div>
    <vb-card id="mana-combination">
      <template v-slot:card-body>
        <div v-for="(mana, index) of deckInfo.manas" :key="index" class="mana">
          <img :src="`images/mana/${index}.jpg`" />
          <div>{{ mana }}</div>
        </div>
      </template>
    </vb-card>
    <vb-card header>
      <template v-slot:card-header>Cards types</template>
      <template v-slot:card-body
        ><div v-for="(value, key) of deckInfo.types" :key="key">
          <template v-if="key === 'creature'">
            <vb-collapse-button target-id="creatureTypes"
              >{{ key }} - {{ value }}</vb-collapse-button
            >
            <vb-collapse id="creatureTypes">
              <div v-for="(value, key) of deckInfo.creatureTypes" :key="key">
                {{ key }} - {{ value }}
              </div>
            </vb-collapse>
          </template>
          <template v-else> {{ key }} - {{ value }} </template>
        </div></template
      >
    </vb-card>
    <div></div>
    <vb-card>
      <template v-slot:card-body>
        <div>
          <div class="chart-container"><canvas id="barChart1"></canvas></div>
        </div>
      </template>
    </vb-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VbCard from "./bootstrap462based/BS46Card";
import VbCollapse from "./bootstrap462based/BS46Collapse";
import VbCollapseButton from "./bootstrap462based/BS46CollapseButton";
import Chart from "chart.js/auto";

export default {
  name: "DeckInfo",
  components: { VbCard, VbCollapse, VbCollapseButton },
  data() {
    return {
      barChart1: {
        config: {
          type: "bar",
          data: {
            labels: ["1-", "2", "3", "4", "5", "6+"],
            datasets: [
              /*{
                label: "creature",
                data: [0, 2, 4, 5, 8, 10],
              },
              {
                label: "instant",
                data: [0, 2, 0, 0, 0, 0],
              },
              {
                label: "sorcery",
                data: [5, 2, 0, 0, 0, 0],
              },
              {
                label: "enchantment",
                data: [4, 1, 0, 0, 0, 0],
              },
              {
                label: "planeswalker",
                data: [0, 0, 4, 0, 0, 0],
              },*/
            ],
          },
          options: {
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        },
      },
      manaValuesChartInstance: null,
    };
  },
  computed: {
    ...mapGetters(["deckInfo"]),
  },
  mounted() {
    console.log("MOUNTED");
    console.log(this.deckInfo);
    let datasets = [];
    for (let key in this.deckInfo.manaValues) {
      datasets.push({ label: key, data: this.deckInfo.manaValues[key] });
    }
    this.barChart1.config.data.datasets = datasets;
    this.manaValuesChartInstance = new Chart(
      document.getElementById("barChart1"),
      this.barChart1.config
    );
  },
  /*updated() {
    datasets = [];
    for (key in deckInfo.manaValues) {
      datasets.push({ label: key, data: deckInfo.manaValues[key] });
    }
    this.manaValuesChartInstance.config.data.datasets = datasets;
  },*/
};
</script>
<style lang="scss"></style>
