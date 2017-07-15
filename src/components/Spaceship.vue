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

        <div class="col s4">
          <h5>Package</h5>
        </div>
        <div class="col s4">
          <h5>Price</h5>
        </div>
        <div class="col s4">
          <h5>Buy</h5>
        </div>

        <div v-for="item in packages" class="package">
          <div class="col s4">
            {{ item.package }}
          </div>
          <div class="col s4">
            {{ item.price }}
          </div>
          <div class="col s4">
            <a class="waves-effect waves-light btn">Buy</a>
          </div>
        </div>

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
        packages: [
          { package: 'Luxury Class', price: '$20,000' },
          { package: 'Business Class', price: '$40,000' },
          { package: 'VIP', price: '$100,000' },
        ],
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

  .btn {
    margin-top: 5%;
  }
</style>
