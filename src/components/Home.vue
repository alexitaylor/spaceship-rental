<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="row">
      <div class="col s12">
        <div class="card-panel teal">
          <span class="white-text">
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
                  :options="fromDestinations",
                  @update="updateFromDestination",
                  placeholder="Select From",
                >
                </multiselect>
              </div>
              <div class="col s6">
                <multiselect
                  :selected="selected",
                  :options="toDestinations",
                  @update="updateToDestination",
                  placeholder="Select To",
                >
                </multiselect>
              </div>
            </div>

            <div class="row">
              <div class="col s6">
                <multiselect
                  :selected="selected",
                  :options="prices",
                  :searchable="false",
                  @update="updatePrice"
                  placeholder="Select price range"
                >
                </multiselect>
              </div>
            </div>

            <a v-link="{ path: '/list' }" class="waves-effect waves-light btn">Search</a>

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
        selectedFromDestination: '',
        selectedToDestination: '',
        priceRange: '',
        fromDestinations: [],
        toDestinations: [],
        prices: [],
        allDestinations: [
          'San Francisco', 'New York', 'Wroclaw', 'Moon',
          'Mars', 'Pluto', 'Tatooine', 'Hooth', 'Naboo',
          'Turkana IV', 'Nimbus III', 'Vulcan', 'Amazonia',
          'Doohan 6', 'Eternium', 'Kronos', 'Tokyo',
        ],
        allPrices: [
          '$0 - $10,000',
          '$10,0001 - $100,000',
          '$100,001 - $500,000',
          '$500,001 - $1,000,000',
        ],
      };
    },
    created() {
      this.fromDestinations = this.allDestinations;
      this.toDestinations = this.allDestinations;
      this.prices = this.allPrices;
    },
    watch: {
      selectedFromDestination(val) {
        if (val === null) {
          this.destinations = this.allDestinations;
        } else {
          this.toDestinations = search.updateDestination(val);
          this.prices = search.updatePriceRange(val, this.selectedToDestination);
        }
      },
      selectedToDestination(val) {
        if (val === null) {
          this.destinations = this.allDestinations;
        } else {
          this.fromDestinations = search.updateDestination(val);
          this.prices = search.updatePriceRange(val, this.selectedFromDestination);
        }
      },
    },
    methods: {
      updateFromDestination(destination) {
        this.selectedFromDestination = destination;
      },
      updateToDestination(destination) {
        this.selectedToDestination = destination;
      },
      updatePrice(price) {
        this.priceRange = price;
      },
    },
  };

//  $(document).ready(() => {
//    $('.datepicker').pickadate({
//      format: 'mm/dd/yyyy',
//      selectMonths: true, // Creates a dropdown to control month
//      selectYears: 15, // Creates a dropdown of 15 years to control year
//    });
//  });
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
