<template>
  <NaV/>
 <h1>Hello {{name}} , Welcome to home page</h1>
 <table border="1">
  <tr>
    <td>Id</td>
    <td>Name</td>
    <td>Address</td>
    <td>Contact</td>
    <td>Actions</td>
  </tr>
  <tr v-for="item in restuarent" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.address }}</td>
    <td>{{ item.contact}}</td>
    <td>
      <router-link class="upd" :to="'/update/'+item.id">Update</router-link>
       <button class="dlt" v-on:click="deleteRestaurent(item.id)">Delete</button>
    </td>
  </tr>
 </table>

</template>
<script>
import axios from 'axios'
import NaV from './NaV.vue';


export default {
    name:'LoGin',
    data(){
      return{
        name:'',
        restuarent:[]
      }
    },
    components:{
      NaV
    },
    methods:{
    async  deleteRestaurent(id){
        let result = await axios.delete("http://localhost:3000/restuarent/"+id);
        if(result.status==200)
        {
          this.loadData()
        }
      },
  async loadData(){
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
    let result = await axios.get("http://localhost:3000/restuarent");
    console.log(result)
    this.restuarent = result.data
      }
    },
   mounted(){
   this.loadData()
  }
};

</script>

<style>
td{
  width: 160px;
  height: 40px;
}
.upd{
  color: green;
  
  border-radius: 0;
}
.dlt{
  color: red;
  background-color: #fff;
  
}


</style>