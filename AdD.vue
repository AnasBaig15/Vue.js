<template>
    <NaV/>
    <h1>Hello {{ name }} welcome to Add restuarent page</h1>
    <form class="form">
  <input type="text" placeholder="Enter name" v-model="restuarent.name" name="name">
  <input type="text" placeholder="Enter address" v-model="restuarent.address" name="address">
  <input type="text" placeholder="Enter contact" v-model="restuarent.contact" name="contact">
  <button type="button" v-on:click="addRestuarent">Add New Restuarent</button>
    </form>

</template>

<script>
import axios from 'axios';
import NaV from './NaV.vue';
export default {
    name:'AdD',
    data(){
        return{

            restuarent:{
                name:"",
                address:"",
                contact:""
            }
        }
    },
    methods:{
       async addRestuarent(){
         const result = await axios.post("http://localhost:3000/restuarent",{
            name:this.restuarent.name,
            address:this.restuarent.address,
            contact:this.restuarent.contact,
         });
         if(result.status==201){
            this.$router.push({name:'HoMe'})
         }
        }
    },
    components:{
        NaV
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}

</script>

<style>
.form input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto ;
  border: 1px solid skyblue;
}
.form button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  cursor: pointer;
}


</style>