<template>
  <div id="app">
    <div class="container">
      <img class="logo" src="./assets/logo.png">
      <p>
        <!-- use v-link directive for navigation. -->
        <a v-link="{ path: '/' }">Go to Home</a>
        <a v-link="{ path: '/list' }">Go to List</a>
      </p>
      <!-- use router-view element as route outlet -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  color: #2c3e50;
  text-align: center;
  width: 90vw;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
