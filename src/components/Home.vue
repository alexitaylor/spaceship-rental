<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col s12">
        <div class="card-panel teal">
          <span class="white-text">Search Feature
            <h6>departureDate: {{ departureDate }}</h6>
            <h6>returnDate: {{ returnDate }}</h6>
            <h6>from: {{ selected  }}</h6>
            <div class="row">
              <div class="col s6"><p>Departure Date</p></div>
              <div class="col s6"><p>Return Date</p></div>
              <div class="col s6"><input v-model="departureDate" type="date" class="datepicker date-input"></div>
              <div class="col s6"><input v-model="returnDate" type="date" class="datepicker date-input"></div>
            </div>

            <div class="row">
              <div class="col s6">
                <div class="input-field col s12">
                  <select v-select="select">
                    <option value="" disabled selected>Choose your option</option>
                    <option v-for="from in fromDestinations" v-bind:value="from">{{ from }}</option>
                  </select>
                  <label class="select-label">From</label>
                </div>
              </div>
              <div class="col s6">
                <div class="input-field col s12">
                  <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option v-for="to in toDestinations">{{ to }}</option>
                  </select>
                  <label class="select-label">To</label>
                </div>
              </div>
            </div>

          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
      departureDate: '',
      returnDate: '',
      fromDestinations: ['San Francisco', 'New York', 'Wroclaw'],
      toDestinations: ['Moon', 'Mars', 'Pluto'],
    };
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
  background-color: #26a69a !important;
  border: none !important;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
  padding-left: 5% !important;
}

.date-input:hover {
  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21) !important;
}

.select-label {
  color: white;
  font-size: 1em;
}
</style>
