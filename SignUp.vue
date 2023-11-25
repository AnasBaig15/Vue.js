<template>
  <img class="logo" src="../assets/logo.jpg" alt="">
  <h1>Sign Up</h1>
   <div class="registers">
       <input type="text" v-model="name" placeholder="Enter Name">
       <input type="text" v-model="email" placeholder="Enter Email">
       <input type="password" v-model="password"  placeholder="Enter Password">
       <button v-on:click="signup">Sign Up</button>
       <p>
        <router-link to="/login">Login</router-link>
       </p>
   </div>  
</template>

<script>
import axios from 'axios'
export default {
  name: 'NaV',
  data(){
    return{
      name:"",
      email:"",
      password:""
    }
  },
  methods:{
   async signup(){
      console.log("signup",this.name,this.email,this.password)
      let result = await axios.post("http://localhost:3000/user",{
        email:this.email,
        password:this.password,
        name:this.name,
      });
      // console.log(result)
      if(result.status==201){

        localStorage.setItem("user-info", JSON.stringify(result.data))
      this.$router.push({name:'HoMe'})
      }
     
    }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user)
    {
      this.$router.push({name:'/'})
    }
  }
}
</script>


<style>
.logo{
  width:100px;
}
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
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
