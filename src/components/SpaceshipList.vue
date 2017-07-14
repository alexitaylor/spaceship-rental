<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2 class="header">Filters</h2>
    <a class="waves-effect waves-light btn" v-on:click="clearFilters">Clear Filters</a>

    <!-- Departure and Return DATE -->
    <div class="row">
      <div class="col s3 offset-s3"><p>Departure Date</p></div>
      <div class="col s3"><p>Return Date</p></div>
      <div class="col s3 offset-s3"><input v-model="departureDate" type="date" class="datepicker date-input" placeholder="Departure Date"></div>
      <div class="col s3"><input v-model="returnDate" type="date" class="datepicker date-input" placeholder="Return Date"></div>
    </div>

    <div class="row">
      <div class="col s3 offset-s3">
        <ul class="pagination">
          <!-- PRICE range -->
          <li class="waves-effect price" v-bind:class="{ 'active': isOne }" v-on:click="updatePriceFilter(1)"><a>$</a></li>
          <li class="waves-effect price" v-bind:class="{ 'active': isTwo }" v-on:click="updatePriceFilter(2)"><a>$$</a></li>
          <li class="waves-effect price" v-bind:class="{ 'active': isThree }" v-on:click="updatePriceFilter(3)"><a>$$$</a></li>
          <li class="waves-effect price" v-bind:class="{ 'active': isFour }" v-on:click="updatePriceFilter(4)"><a>$$$$</a></li>
        </ul>
      </div>
      <div class="col s3">
        <!-- Spaceship SIZE range -->
        <i class="fa fa-rocket fa-2x" v-bind:class="{ 'fa-active': isFa1 }" v-on:click="updateSizeFilter(1)" aria-hidden="true"></i>
        <i class="fa fa-rocket fa-3x" v-bind:class="{ 'fa-active': isFa2 }" v-on:click="updateSizeFilter(2)" aria-hidden="true"></i>
        <i class="fa fa-rocket fa-4x" v-bind:class="{ 'fa-active': isFa3 }" v-on:click="updateSizeFilter(3)" aria-hidden="true"></i>
      </div>
      <div class="col s6 offset-s3">
        <!-- Spaceship's destinations -->
        <multiselect
          :selected="selected",
          :options="destinations",
          @update="updateDestination",
          placeholder="Select Destination",
        >
        </multiselect>
      </div>
    </div>

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
                <h6>{{ ship.passengers }}</h6>
              </div>
              <div class="card-action">
                <a v-link="{ name: 'Spaceship', params: { shipID: ship.model } }">Learn More</a>
                <!--<a v-link="{ name: 'Spaceship', params: { shipID: ship.model } }">Book Flight</a>-->
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
  import filters from '../services/filters';

  export default {
    components: { Multiselect },
    data() {
      return {
        msg: 'Hello Space Ship List!',
        spaceships: [],
        departureDate: '',
        returnDate: '',
        isOne: false,
        isTwo: false,
        isThree: false,
        isFour: false,
        isFa1: false,
        isFa2: false,
        isFa3: false,
        selectedDestination: '',
        currentPriceFilter: '',
        currentSizeFilter: '',
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
    watch: {
      departureDate(date) {
        this.spaceships = filters.filterAll(
          date,
          this.returnDate,
          this.currentPriceFilter,
          this.currentSizeFilter,
          this.selectedDestination
        );
      },
      returnDate(date) {
        this.spaceships = filters.filterAll(
          this.departureDate,
          date,
          this.currentPriceFilter,
          this.currentSizeFilter,
          this.selectedDestination
        );
      },
      currentPriceFilter(price) {
        console.log('priiiice', price);
        this.spaceships = filters.filterAll(
          this.departureDate,
          this.returnDate,
          price,
          this.currentSizeFilter,
          this.selectedDestination
        );
      },
      currentSizeFilter(size) {
        this.spaceships = filters.filterAll(
          this.departureDate,
          this.returnDate,
          this.currentPriceFilter,
          size,
          this.selectedDestination
        );
      },
      selectedDestination(destination) {
        this.spaceships = filters.filterAll(
          this.departureDate,
          this.returnDate,
          this.currentPriceFilter,
          this.currentSizeFilter,
          destination
        );
      },
    },
    methods: {
      updatePriceFilter(idx) {
        this.isOne = idx === 1;
        this.isTwo = idx === 2;
        this.isThree = idx === 3;
        this.isFour = idx === 4;
        this.currentPriceFilter = idx;
      },
      updateSizeFilter(idx) {
        this.isFa1 = idx === 1;
        this.isFa2 = idx === 2;
        this.isFa3 = idx === 3;
        this.currentSizeFilter = idx;
      },
      updateDestination(destination) {
        this.selectedDestination = destination;
      },
      clearFilters() {
        this.isOne = false;
        this.isTwo = false;
        this.isThree = false;
        this.isFour = false;
        this.isFa1 = false;
        this.isFa2 = false;
        this.isFa3 = false;
        this.currentPriceFilter = '';
        this.currentSizeFilter = '';
        this.selectedDestination = '';
        this.spaceships = spaceships.spaceships;
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

  .price:hover {
    background-color: #78cfa8;
  }

  .fa-active {
    color: #42b983;
  }

  .fa:hover {
    color: #78cfa8;
  }
</style>
