<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
    <img src="./assets/logo.png">
    <!-- <List /> -->
    <Control />
>>>>>>> 73bfcdc2f6d907a0d0572cd2ce6fa906efec0a1c
  </div>
</template>

<script>
<<<<<<< HEAD
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
=======
// import List from './components/List.vue';
import Control from './components/Control.vue';
export default {
  name: 'app',
  components: {
    // List
    Control
>>>>>>> 73bfcdc2f6d907a0d0572cd2ce6fa906efec0a1c
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
