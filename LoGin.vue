<template>
      <img class="logo" src="../assets/logo.jpg" alt="">
<h1>login</h1>
<div class="registers">
       <input type="text" v-model="email" placeholder="Enter Email">
       <input type="password" v-model="password"  placeholder="Enter Password">
       <button class="log" v-on:click="login">Login</button>
       <p>
        <router-link to="/signup">SignUp</router-link>
       </p>
   </div>  

</template>
<script>
import axios from 'axios';
export default {
    name:'LoGin',
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
  async login(){
    
     let result = await axios.get(
      `http://localhost:3000/user?email=${this.email}&password=${this.password}`
     );
     if(result.status == 200 && result.data.length > 0){
      localStorage.setItem("user-info",JSON.stringify(result.data[0]));
      this.$router.push({name:"HoMe"})
     }
     console.log(result)
      
      }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name:'HoMe'})
      }
    }
}
</script>
<style>
.registers input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto ;
  border: 1px solid skyblue;
}
.log {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: blue;
  cursor: pointer;
}





</style>