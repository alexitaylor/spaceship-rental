<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<h1 v-for="ship in spaceships">{{ ship.model }}</h1>-->


      <h2 class="header">Horizontal Card</h2>
      <div class="row">
        <div class="col s6" v-for="(index, ship) in spaceships">
          <div class="card horizontal">
            <div class="card-image">
              <img :src="ship.img" width="100" height="190">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h6 class="header"><strong>{{ ship.make }}</strong> {{ ship.model }}</h6>
                <p></p>
                <p></p>
                <p>{{ ship.price }}</p>
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
  import spaceships from '../data/spaceships';

  export default {
    data() {
      return {
        msg: 'Hello Space Ship List!',
        spaceships: [],
      };
    },
    created() {
      this.spaceships = spaceships.spaceships;
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
</style>
