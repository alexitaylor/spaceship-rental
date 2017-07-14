<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<h1 v-for="ship in spaceships">{{ ship.model }}</h1>-->


  </div>
</template>

<script>
  import spaceships from '../data/spaceships';

  export default {
    data() {
      return {
        msg: 'Hello Space Ship!',
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
