<template>
  <div id="app">
    <div class="container">
      <img class="logo" src="./assets/logo.png">
      <home></home>
    </div>
  </div>
</template>

<script>
import Home from './components/Home';

export default {
  components: {
    Home,
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
