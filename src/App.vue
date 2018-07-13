<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <List /> -->
    <Control />
  </div>
</template>

<script>
// import List from './components/List.vue';
import Control from './components/Control.vue';
export default {
  name: 'app',
  components: {
    // List
    Control
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
