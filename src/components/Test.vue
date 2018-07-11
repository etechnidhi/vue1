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
    <li v-for="(item,index) in data" v-bind::key="index">
      <span>{{item}}</span> 
    <button v-on:click.prevent ="clear(index)"> Clear </button>
    <button v-on:click.prevent="edit(index)">Edit</button>
    </li> 
  </ul>
  </div>

</template>

<script>
export default {
  name: 'Test',
  data : function() {
    return{
      name:"",
      data:[],
      editIndex:false
      };
    },

  methods:{
    submit:function(e){
      if(e.keyCode === 13){
        if(this.editIndex){
          Vue.set(this.data,this.editIndex,this.name);
          this.name="";
          this.editIndex= -1;
        }
        else{
          this.data.push(this.name);
          this.name = "";
        }
      }
    },
    clear: function(index){
     this.data.splice(index,1);
    },
    edit:function(index){
      this.editIndex=index;
      this.name=this.data[index];
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
