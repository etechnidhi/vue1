<template>
    <div id='control_timer'>
        <Timer data-tag='start' v-bind:time-start='start' v-bind:time-stop='stop'></Timer>
        <button v-on:click='startInterval'>Start</button>
        <button v-on:click='stopInterval'>Stop</button>
    </div>
</template>

<script>
import Timer from './Timer.vue'

export default {
  name: 'Control',
  components: {
    Timer
  },
  data () {
    return {
      start: false,
      stop: true
    }
  },
  methods: {
    startInterval: function () {
      this.start = true
      //this is the view purpose only
      console.log(this.start)
      this.$bus.$emit('time-start')
    },
    stopInterval: function () {
      this.start = false
      this.stop = true
      this.$bus.$emit('time-stop')
      //this is the view purpose only
      console.log(this.start)
    }
  }
}
</script>

<style>
a {
  background: grey;
  border: none;
  color: white;
  text-decoration: none;
  padding: 5px;
  font-size: 25px;
  margin-right: 25px;
}
button {
  margin-top: 15px;
}
</style>
