<template>
  <div class="hello">
    <p> Type something...</p>
    <i>Press Enter</i>
    
    <br/>
    <form v-on:submit.prevent >
      <input v-on:keypress="submit" type="text" v-model="name" />
    </form>
    
    <p>Original message: "{{ name }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>

  <ul>
    <li v-for="(item,index) in data" v-bind::key="index">{{item}} </li> 
  </ul>
  </div>

</template>

<script>
export default {
  name: 'Test',
  data : function() {
    return{
      name:"",
      data:[]
      }
    },

  methods:{
    submit:function(e){
      if(e.keyCode === 13){
        this.data.push(this.name);
        this.name = "";
      }
    }
  },
  computed: {
    reversedMessage: function(){
      return this.name.split('').reverse().join('');
    }
  }
}
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello li{
  border:1px solid grey;
  padding:6px;
}
</style>
