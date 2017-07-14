<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2 class="header">Filters</h2>
    <a class="waves-effect waves-light btn" v-on:click="clearFilters">Clear Filters</a>
    <ul class="pagination">
      <li class="waves-effect" v-bind:class="{ 'active': isOne }" v-on:click="priceFilter(1)"><a>$</a></li>
      <li class="waves-effect" v-bind:class="{ 'active': isTwo }" v-on:click="priceFilter(2)"><a>$$</a></li>
      <li class="waves-effect" v-bind:class="{ 'active': isThree }" v-on:click="priceFilter(3)"><a>$$$</a></li>
      <li class="waves-effect" v-bind:class="{ 'active': isFour }" v-on:click="priceFilter(4)"><a>$$$$</a></li>
    </ul>

    <multiselect
      :selected="selected",
      :options="destinations",
      @update="updateDestination",
      placeholder="Select To",
    >
    </multiselect>

      <div class="row">
        <div class="col s6" v-for="(index, ship) in spaceships">
          <div class="card horizontal">
            <div class="card-image">
              <img :src="ship.img" width="100" height="190">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h6 class="header"><strong>{{ ship.make }}</strong></h6>
                <h6 class="header">{{ ship.model }}</h6>
                <h6>{{ ship.priceUSD }} / ticket</h6>
              </div>
              <div class="card-action">
                <a v-link="{ name: 'Spaceship', params: { shipID: ship.model } }">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>



  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';
  import spaceships from '../data/spaceships';
  import search from '../services/search';

  export default {
    components: { Multiselect },
    data() {
      return {
        msg: 'Hello Space Ship List!',
        spaceships: [],
        isOne: false,
        isTwo: false,
        isThree: false,
        isFour: false,
        selectedDestination: '',
        destinations: [
          'San Francisco', 'New York', 'Wroclaw', 'Moon',
          'Mars', 'Pluto', 'Tatooine', 'Hooth', 'Naboo',
          'Turkana IV', 'Nimbus III', 'Vulcan', 'Amazonia',
          'Doohan 6', 'Eternium', 'Kronos', 'Tokyo',
        ],
      };
    },
    created() {
      this.spaceships = spaceships.spaceships;
    },
    methods: {
      priceFilter(idx) {
        this.isOne = idx === 1;
        this.isTwo = idx === 2;
        this.isThree = idx === 3;
        this.isFour = idx === 4;
        this.spaceships = search.priceFilter(idx);
      },
      clearFilters() {
        this.spaceships = spaceships.spaceships;
      },
      updateDestination(destination) {
        // do something
        this.selectedDestination = destination;
        this.spaceships = search.destinationFilter(destination);
      },
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

  .pagination li.active {
    background-color: #42b983 !important;
  }
</style>
