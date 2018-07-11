<template>
  <div class="hello">
    <Form v-on:submit-item="submit" />
      <ul>
        <li v-for="(item,index) in data" v-bind::key="index">
          <span>{{item}}</span> 
        </li> 
      </ul>
    </form>
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: "List",
  components:{
    Form
  },
  data : function() {
    return{
      data:[]
    };
  },
  methods:{
    submit:function(name){
      this.data.push(name);
    },
    clear: function(index){
     this.data.splice(index,1);
    },
    edit:function(){
      Vue.set(this.data,this.editIndex,this.name);
      this.name = "";
      this.editIndex = -1;
    },

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
button{
  float:right;
  margin-right:10px;
}
</style>
