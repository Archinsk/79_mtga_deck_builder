import Vue from "vue";
import Vuex from "vuex";
import getCardChances from "./calculations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deck: {
      id: "001",
      name: "Black Vampires",
      cards: [
        {
          id: "0001",
          name: "Swamp",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=478535&type=card",
          types: ["land"],
          count: 8,
        },
        {
          id: "0002",
          name: "Arguel's Blood Fast",
          imageUrl:
            "https://cards.scryfall.io/large/front/c/4/c4ac7570-e74e-4081-ac53-cf41e695b7eb.jpg?1562563598",
          types: ["enchantment"],
          manaСost: "c,b",
          manaValue: 2,
          count: 1,
        },
        {
          id: "0003",
          name: "Bloodghast",
          imageUrl:
            "https://cards.scryfall.io/large/front/c/f/cf5fe0bc-02b7-4bcf-8adf-93af7ad76963.jpg?1694044861",
          types: ["creature"],
          subtypes: ["vampire", "spirit"],
          manaСost: "b,b",
          manaValue: 2,
          count: 3,
        },
        {
          id: "0004",
          name: "Cordial Vampire",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=546529&type=card",
          types: ["creature"],
          subtypes: ["vampire"],
          manaСost: "b,b",
          manaValue: 2,
          count: 3,
        },
        {
          id: "0005",
          name: "Knight of the Ebon Legion",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469099&type=card",
          types: ["creature"],
          subtypes: ["vampire", "knight"],
          manaСost: "b",
          manaValue: 1,
          count: 3,
        },
        {
          id: "0006",
          name: "Sorin, Imperious Bloodlord",
          imageUrl:
            "	https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469109&type=card",
          types: ["planeswalker"],
          manaСost: "c*2,b",
          manaValue: 3,
          count: 4,
        },
        {
          id: "0007",
          name: "Bloodletter of Aclazotz",
          imageUrl:
            "https://cards.scryfall.io/large/front/d/4/d4f6027a-003a-4f9d-929a-0b6da1fa42c9.jpg?1699044094",
          types: ["creature"],
          subtypes: ["vampire", "demon"],
          manaСost: "c,b,b,b",
          manaValue: 4,
          count: 2,
        },
        {
          id: "0008",
          name: "Evelyn, the Covetous",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=557473&type=card",
          types: ["creature"],
          subtypes: ["vampire", "rogue"],
          manaСost: "c*2,u/b,b,b/r",
          manaValue: 5,
          count: 1,
        },
        {
          id: "0009",
          name: "Agadeem, the Undercrypt",
          imageUrl:
            "https://cards.scryfall.io/large/back/6/7/67f4c93b-080c-4196-b095-6a120a221988.jpg?1604195226",
          types: ["land"],
          count: 4,
        },
        {
          id: "0010",
          name: "Castle Locthwain",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=569416&type=card",
          types: ["land"],
          count: 1,
        },
        {
          id: "0011",
          name: "Nykthos, Shrine to Nyx",
          imageUrl:
            "https://cards.scryfall.io/large/front/8/3/834b27a0-dfd7-4f96-8cde-cacac4b24acc.jpg?1594077253",
          types: ["land"],
          count: 1,
        },
        {
          id: "0012",
          name: "Voldaren Estate",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=543671&type=card",
          types: ["land"],
          count: 4,
        },
        {
          id: "0013",
          name: "Ifnir Deadlands",
          imageUrl:
            "https://cards.scryfall.io/large/front/0/b/0b88728b-9b18-40c6-b634-f87f8da83665.jpg?1562788706",
          types: ["land"],
          count: 4,
        },
        {
          id: "0014",
          name: "Dusk's Landing",
          imageUrl:
            "https://cards.scryfall.io/large/front/f/7/f75f51d3-2df7-4b37-bbd1-2635db64bc22.jpg?1701720339",
          types: ["sorcery"],
          manaСost: "b",
          manaValue: 1,
          count: 2,
        },
        {
          id: "0015",
          name: "Thoughtseize",
          imageUrl:
            "https://cards.scryfall.io/large/front/6/f/6fff168c-6a0f-473f-86db-8cc8f619fd58.jpg?1597172582",
          types: ["sorcery"],
          manaСost: "b",
          manaValue: 1,
          count: 2,
        },
        {
          id: "0016",
          name: "Font of Agonies",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=459290&type=card",
          types: ["enchantment"],
          manaСost: "b",
          manaValue: 1,
          count: 3,
        },
        {
          id: "0017",
          name: "Phyrexian Reclamation",
          imageUrl:
            "https://cards.scryfall.io/large/front/f/b/fb0271e4-8ad1-4ad9-9b3e-7abf911f3059.jpg?1600701185",
          types: ["enchantment"],
          manaСost: "b",
          manaValue: 1,
          count: 1,
        },
        {
          id: "0018",
          name: "Vito, Thorn of the Dusk Rose",
          imageUrl:
            "https://cards.scryfall.io/large/front/0/f/0fe79ee4-c3f3-4a6b-a967-203ca3b70ee5.jpg?1594736442",
          types: ["creature"],
          subtypes: ["vampire", "cleric"],
          manaСost: "c*2,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0019",
          name: "Bloodchief's Thirst",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=494257&type=card",
          types: ["sorcery"],
          manaСost: "k",
          manaValue: 1,
          count: 1,
        },
        {
          id: "0020",
          name: "Drana, Liberator of Malakir",
          imageUrl:
            "https://cards.scryfall.io/large/front/0/8/0850b41d-3589-40cd-ae22-cc5b4ddee1c4.jpg?1698988238",
          types: ["creature"],
          subtypes: ["vampire", "ally"],
          manaСost: "c,b,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0021",
          name: "Indulgent Aristocrat",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=546534&type=card",
          types: ["creature"],
          subtypes: ["vampire", "noble"],
          manaСost: "b",
          manaValue: 1,
          count: 3,
        },
        {
          id: "0022",
          name: "Bitter Triumph",
          imageUrl:
            "https://cards.scryfall.io/large/front/0/5/05bdd22c-3e11-4c29-bdfa-d3dfc0e90a9f.jpg?1699044085",
          types: ["instant"],
          manaСost: "c,b",
          manaValue: 2,
          count: 2,
        },
        {
          id: "0023",
          name: "Demolition Field",
          imageUrl:
            "https://cards.scryfall.io/large/front/4/7/47994cb6-204a-4fbe-a9d4-5798a70c95ab.jpg?1712354968",
          types: ["land"],
          count: 2,
        },
        {
          id: "0024",
          name: "Vraan, Executioner Thane",
          imageUrl:
            "https://cards.scryfall.io/large/front/4/c/4c4a3119-c70a-46ff-8ede-6356f2b7bc13.jpg?1675957057",
          types: ["creature"],
          subtypes: ["vampire", "phyrexian"],
          manaСost: "c,b",
          manaValue: 2,
          count: 1,
        },
        {
          id: "0025",
          name: "Feed the Swarm",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=569284&type=card",
          types: ["sorcery"],
          manaСost: "c,b",
          manaValue: 2,
          count: 2,
        },
      ],
      sideBoard: [
        {
          id: "0026",
          name: "Kinzu of the Bleak Coven",
          imageUrl:
            "https://cards.scryfall.io/large/front/2/8/28934cf3-c1e0-49c9-93ce-fd60b1881884.jpg?1675957442",
          types: ["creature"],
          subtypes: ["vampire", "phyrexian"],
          manaСost: "c*4,b",
          manaValue: 5,
          count: 1,
        },
        {
          id: "0027",
          name: "Voldaren Bloodcaster",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=543517&type=card",
          types: ["creature"],
          subtypes: ["vampire", "wizard"],
          manaСost: "c,b",
          manaValue: 2,
          count: 1,
        },
        {
          id: "0028",
          name: "Blood Artist",
          imageUrl:
            "https://cards.scryfall.io/large/front/a/b/ab76e956-5d6c-49b8-991c-c39d5b18b876.jpg?1681158416",
          types: ["creature"],
          subtypes: ["vampire"],
          manaСost: "c,b",
          manaValue: 2,
          count: 1,
        },
        {
          id: "0029",
          name: "Vona's Hunger",
          imageUrl:
            "https://cards.scryfall.io/large/front/a/a/aab958d5-9c1f-420f-b358-ec0325f22f84.jpg?1555040347",
          types: ["instant"],
          manaСost: "c*2,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0030",
          name: "Preacher of the Schism",
          imageUrl:
            "https://cards.scryfall.io/large/front/8/9/89345f55-2b32-4356-945a-d56dded39909.jpg?1699044158",
          types: ["creature"],
          subtypes: ["vampire", "cleric"],
          manaСost: "c*2,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0031",
          name: "Fatal Push",
          imageUrl:
            "https://cards.scryfall.io/large/front/3/8/387c9f62-6a93-4c88-bdaf-205717d91216.jpg?1573509609",
          types: ["instant"],
          manaСost: "b",
          manaValue: 1,
          count: 1,
        },
        {
          id: "0032",
          name: "Sanguine Brushstroke",
          imageUrl:
            "https://cards.scryfall.io/large/front/c/2/c2744e16-1016-432a-8698-2a2d407e7b04.jpg?1695436280",
          types: ["enchantment"],
          manaСost: "c,b,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0033",
          name: "Witch's Vengeance",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=475225&type=card",
          types: ["sorcery"],
          manaСost: "c,b,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0034",
          name: "Yahenni, Undying Partisan",
          imageUrl:
            "https://cards.scryfall.io/large/front/c/9/c9a5e924-291c-43b7-bb34-5ac2842a60e7.jpg?1605327970",
          types: ["creature"],
          subtypes: ["vampire", "aetherborn"],
          manaСost: "c*2,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0035",
          name: "Henrika Domnathi",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=543495&type=card",
          types: ["creature"],
          subtypes: ["vampire"],
          manaСost: "c*2,b,b",
          manaValue: 4,
          count: 1,
        },
        {
          id: "0036",
          name: "Nighthawk Scavenger",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=569295&type=card",
          types: ["creature"],
          subtypes: ["vampire", "rogue"],
          manaСost: "c,b,b",
          manaValue: 3,
          count: 1,
        },
        {
          id: "0037",
          name: "Vein Ripper",
          imageUrl:
            "https://cards.scryfall.io/large/front/0/7/078933b3-6d82-45f2-94e8-addf54cf1704.jpg?1706241798",
          types: ["creature"],
          subtypes: ["vampire", "assassin"],
          manaСost: "c*3,b,b,b",
          manaValue: 6,
          count: 1,
        },
        {
          id: "0038",
          name: "Queen's Bay Paladin",
          imageUrl:
            "https://cards.scryfall.io/large/front/d/0/d0a3339d-6067-4af5-9536-7e2d5ddd8918.jpg?1699044164",
          types: ["creature"],
          subtypes: ["vampire", "knight"],
          manaСost: "c*3,b,b",
          manaValue: 5,
          count: 1,
        },
        {
          id: "0039",
          name: "Roaming Throne",
          imageUrl:
            "https://cards.scryfall.io/large/front/3/2/32fd8b7c-baf3-4d3d-be6f-044a917b11a0.jpg?1701115816",
          types: ["creature", "artifact"],
          subtypes: ["golem"],
          manaСost: "c*4",
          manaValue: 5,
          count: 1,
        },
        {
          id: "0040",
          name: "Callous Bloodmage",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=515871&type=card",
          types: ["creature"],
          subtypes: ["vampire", "warlock"],
          manaСost: "c*2,b",
          manaValue: 5,
          count: 1,
        },
      ],
    },
    activeCard: null,
    variants: null,
  },
  getters: {
    deckLands: (state) => {
      return state.deck.cards.filter((card) => card.types.includes("land"));
    },
    deckNonLands: (state) => {
      return state.deck.cards.filter((card) => !card.types.includes("land"));
    },
    deckInfo: (state) => {
      let deckInfo = {
        manaValues: {},
        manaValueAverage: "",
        manas: [0, 0, 0, 0, 0, 0, 0],
        types: {
          creature: 0,
          instant: 0,
          sorcery: 0,
          enchantment: 0,
          planeswalker: 0,
          land: 0,
        },
        creatureTypes: {},
      };
      state.deck.cards.forEach((card) => {
        card.types.forEach((type) => {
          deckInfo.types[type] += card.count;
          let cardManaValuesColumn;
          if (type !== "land") {
            if (card.manaValue < 1) {
              cardManaValuesColumn = 1;
            } else if (card.manaValue > 6) {
              cardManaValuesColumn = 1;
            } else {
              cardManaValuesColumn = card.manaValue;
            }
            console.log(`${card.name} - ${cardManaValuesColumn}`);
            if (deckInfo.manaValues[type]) {
              deckInfo.manaValues[type][cardManaValuesColumn - 1] += card.count;
            } else {
              deckInfo.manaValues[type] = [0, 0, 0, 0, 0, 0];
              deckInfo.manaValues[type][cardManaValuesColumn - 1] = card.count;
            }
          }
          if (type === "creature") {
            card.subtypes.forEach((subtype) => {
              if (deckInfo.creatureTypes[subtype]) {
                deckInfo.creatureTypes[subtype] += card.count;
              } else {
                deckInfo.creatureTypes[subtype] = card.count;
              }
            });
          }
        });
        if (!card.types.includes("land")) {
          if (card.manaСost.split(",").includes("w")) {
            deckInfo.manas[0] += card.count;
          }
          if (card.manaСost.split(",").includes("u")) {
            deckInfo.manas[1] += card.count;
          }
          if (card.manaСost.split(",").includes("b")) {
            deckInfo.manas[2] += card.count;
          }
          if (card.manaСost.split(",").includes("r")) {
            deckInfo.manas[3] += card.count;
          }
          if (card.manaСost.split(",").includes("g")) {
            deckInfo.manas[4] += card.count;
          }
        } else {
          deckInfo.manas[6] += card.count;
        }
      });
      return deckInfo;
    },
  },
  mutations: {
    activateCard(state, card) {
      console.log(card.name);
      state.activeCard = card;
    },
    calculateChances(state) {
      console.log("считаю шансы");
      state.variants = getCardChances(60, 7, 4);
    },
  },
  actions: {},
  modules: {},
});
