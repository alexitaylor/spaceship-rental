<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Spaceship {{ $route.params.shipID }}</h2>
    <div class="row">
      <div class="col s12"><h4><strong>{{ currentShip.make }}</strong> {{ currentShip.model }}</h4></div>
      <div class="col s6">
        <p>{{ currentShip.description }}</p>
        <h5>Price: {{ currentShip.priceUSD }}</h5>
        <h5>Passengers: {{ currentShip.passengers }}</h5>
        <ul>
          <li><strong>Destinations:</strong></li>
          <li v-for="place in currentShip.destinations">{{ place }}</li>
        </ul>
      </div>
      <div class="col s6">
        <img :src="currentShip.img" />
      </div>
    </div>
  </div>
</template>

<script>
  import search from '../services/search';

  export default {
    data() {
      return {
        msg: 'Hello Space Ship!',
        currentShip: {},
      };
    },
    created() {
      this.currentShip = search.getCurrentShip(this.$route.params.shipID)[0];
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }

  p {
    text-align: left;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
