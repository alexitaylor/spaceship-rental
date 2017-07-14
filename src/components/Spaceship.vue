<template>
  <div class="hello">
    <div class="row">
      <div class="col s12"><h1><strong>{{ currentShip.make }}</strong> {{ currentShip.model }}</h1></div>
      <div class="col s6">
        <p>{{ currentShip.description }}</p>
        <h5>Price: {{ currentShip.priceUSD }} / ticket</h5>
        <h5>Passengers: {{ currentShip.passengers }}</h5>
        <ul>
          <li><strong>Destinations:</strong></li>
          <li v-for="place in currentShip.destinations">{{ place }}</li>
        </ul>
      </div>
      <div class="col s6">
        <img :src="currentShip.img" width="200" height="300" />
      </div>
    </div>
    <div class="row">
      <div class="col s3 offset-s3"><a v-link="{ path: '/list' }" class="waves-effect waves-light btn">Back</a></div>
      <div class="col s3"><a class="waves-effect waves-light btn disabled">Book Spaceship</a></div>
    </div>
  </div>
</template>

<script>
  import filter from '../services/filters';

  export default {
    data() {
      return {
        msg: 'Hello Space Ship!',
        currentShip: {},
      };
    },
    created() {
      this.currentShip = filter.getCurrentShip(this.$route.params.shipID)[0];
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
