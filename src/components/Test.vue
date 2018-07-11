<template>
<!-- import func from './vue-temp/vue-editor-bridge'; -->
  <div class="hello">
    <!-- {{ name }} Testing -->

    <div v-bind:style="{color: color_value.color}">
      {{ name }} welcome to VueJs
    </div>

    <br/>
    <br/>

      {{date}} 
    
    <br/>
    <br/>

    <input type="text" v-model="name"/>
    <button v-on:click = "clear">Clear </button>
    <button @click="makeCapital">Caps </button>
    <br/><br/>
    <button @click="makeSmall">Small </button>
  

    <p>Original message: "{{ name }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>

  <!-- <input :checked="isRed" v-model="isRed" type="checkbox" @click="red" />Red -->


<select v-model="color_value">
 <option v-for="(col,index) in colors" v-bind:key="index" v-bind:value="{color:col}">{{col}} </option>
</select>
  </div>

</template>

<script>
export default {
  name: 'Test',
  data : function() {
    return{
      name:"Nidhi",
      date: false,
      colors:["red","yellow","green","orange","pink","grey"],
      color_value:{
        color: "red"
      },
    };
  },
  // created: function() {
  //   // console.log("created");
  //   // this.date = new Date();
  //   this.date =
  //   new Date().getDay()+
  //   "-"+
  //   new Date().getMonth()+
  //   "-"+
  //   new Date().getFullYear()
  // },
  // mounted: function() {
  // //   console.log("mounted");
  // //   this.date = new Date();
  // // },
  // // updated: function() {
  // //   console.log("updated");
  // // },
  // // destroyed: function() {
  // //   console.log("destroyed");
  // //   this.message = new Date();

  // this.date=
  //   new Date().getDay()+
  //   "-"+
  //   new Date().getMonth()+
  //   "-"+
  //   new Date().getFullYear();
  // },

  methods:{
    clear: function(){
    this.name ="";
    },
    makeCapital: function(){
      this.name = this.name.toUpperCase();
    },
    makeSmall: function(){
      this.name = this.name.toLowerCase();
    }
  },
  computed: {
    reversedMessage: function(){
      return this.name.split('').reverse().join('');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
  color: red;
}
.green{
  color: green;
}
</style>
