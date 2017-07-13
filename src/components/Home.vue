<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="row">
      <div class="col s12">
        <div class="card-panel teal">
          <span class="white-text">Search Feature
            <h6>departureDate: {{ departureDate }}</h6>
            <h6>returnDate: {{ returnDate }}</h6>
            <h6>from: {{ selectedFromDestination }}</h6>
            <h6>To: {{ selectedToDestination }}</h6>
            <h6>priceRange: {{ priceRange }}</h6>
            <h6>destinations: {{ destinations.length }}</h6>
            <div class="row">
              <div class="col s6"><p>Departure Date</p></div>
              <div class="col s6"><p>Return Date</p></div>
              <div class="col s4"><input v-model="departureDate" type="date" class="datepicker date-input" placeholder="Departure Date"></div>
              <div class="col s4 offset-s2"><input v-model="returnDate" type="date" class="datepicker date-input" placeholder="Return Date"></div>
            </div>

            <div class="row">
              <div class="col s6">
                <multiselect
                  :selected="selected",
                  :options="destinations",
                  @update="updateFromDestination",
                  placeholder="Select From",
                >
                </multiselect>
              </div>
              <div class="col s6">
                <multiselect
                  :selected="selected",
                  :options="destinations",
                  @update="updateToDestination",
                  placeholder="Select To",
                >
                </multiselect>
              </div>
            </div>

          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import search from '../services/search';

export default {
  components: { Multiselect },
  data() {
    return {
      msg: 'Hello World!',
      departureDate: '',
      returnDate: '',
      destinations: [
        'San Francisco', 'New York', 'Wroclaw', 'Moon',
        'Mars', 'Pluto', 'Tatooine', 'Hooth', 'Naboo',
        'Turkana IV', 'Nimbus III', 'Vulcan', 'Amazonia',
        'Doohan 6', 'Eternium', 'Kronos', 'Tokyo',
      ],
      selectedFromDestination: '',
      selectedToDestination: '',
      priceRange: '',
    };
  },
  methods: {
    updateFromDestination(destination) {
      this.selectedFromDestination = destination;
    },
    updateToDestination(destination) {
      this.selectedToDestination = destination;
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

.date-input {
  background-color: white !important;
  border: none !important;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
  padding-left: 5% !important;
  width: 50vw;
  color: black;
}

.date-input:hover {
  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21) !important;
}

.select-label {
  color: white;
  font-size: 1em;
}

</style>
