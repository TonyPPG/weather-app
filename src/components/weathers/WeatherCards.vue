<!--
Weather Card List Component
-->
<template>
  <div>
    <div class="order-group">
      <button class="btn btn-primary" @click="orderByAlphabet">A-Z</button>
      <button class="btn btn-primary" @click="orderByTemperature">
        Temperature
      </button>
      <button class="btn btn-primary" @click="orderByLastUpdate">
        Last Update
      </button>
    </div>
    <div class="search-bar">
      <input
        type="text"
        v-model="search"
        class="form-control"
        placeholder="Filter by Suburb Name / Country Name or Weather Condition"
      />
    </div>
    <app-weather-card
      v-for="card in filteredWeatherCards"
      :weather="card"
      v-bind:key="card._venueID"
    ></app-weather-card>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";

export default {
  data() {
    return {
      search: "",
      cards: [],
    };
  },
  components: {
    appWeatherCard: WeatherCard,
  },
  methods: {
    orderByAlphabet() {
      this.cards.sort(function (a, b) {
        if (a._name < b._name) {
          return -1;
        }
        if (a._name > b._name) {
          return 1;
        }
        return 0;
      });
    },
    orderByTemperature() {
      this.cards.sort(function (a, b) {
        if (a._weatherTemp == b._weatherTemp) {
          return 0;
        }
        if (!b._weatherTemp || a._weatherTemp > b._weatherTemp) {
          return -1;
        }
        if (!a._weatherTemp || a._weatherTemp < b._weatherTemp) {
          return 1;
        }
        return 0;
      });
    },
    orderByLastUpdate() {
      this.cards.sort(function (a, b) {
        if (a._weatherLastUpdated > b._weatherLastUpdated) {
          return -1;
        }
        if (a._weatherLastUpdated < b._weatherLastUpdated) {
          return 1;
        }
        return 0;
      });
    },
  },
  computed: {
    /** Filter Weather by Country Name or Weather Condition */
    filteredWeatherCards() {
      return this.cards.filter((element) => {
        return (
          element._name.toLowerCase().match(this.search.toLowerCase()) ||
          (element._weatherCondition &&
            element._weatherCondition
              .toLowerCase()
              .match(this.search.toLowerCase())) ||
          element._country._name.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
  },
  created() {
    this.cards = this.$store.getters.weathers;
  },
};
</script>

<style lang="scss">
.order-group {
  padding: 0 15px;
}

.search-bar {
  margin: 15px;
}
</style>