<template>
    <div class='timer'>
        <span id='my-text'>{{ myText }}</span>
       <!-- <button @click="startInterval" id='start-interval'>Start</button>
       <button @click="stopInterval" id='stop-interval'>Stop</button> -->
    </div>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      myText: 0,
      intervalId: ''
    }
  },
  created () {
    var _this = this
    this.$bus.$on('time-start', function () {
      _this.startInterval()
    })
    this.$bus.$on('time-stop', function () {
      _this.stopInterval()
    })
  },
  props: ['time-start', 'time-stop'],
  methods: {
    startInterval: function () {
      const self = this
      self.intervalId = setInterval(function () {
        self.myText += 1
        // eslint-disable-next-line
        console.log(self.myText)
      }, 1000)
    },
    stopInterval: function () {
      const self = this
      clearInterval(self.intervalId)
    }
  }
}
</script>

<style>
button {
  margin-left: 15px;
  font-size: 20px;
  padding: 5px;
  background: grey;
  color: white;
  border: none;
}
</style>
