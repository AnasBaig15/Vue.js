<template>
    <NaV/>
<h1>Hello  Welcome to Update page</h1>
<form class="update">
  <input type="text" placeholder="Enter name" v-model="restuarent.name" name="name">
  <input type="text" placeholder="Enter address" v-model="restuarent.address" name="address">
  <input type="text" placeholder="Enter contact" v-model="restuarent.contact" name="contact">
  <button class="but" type="button" v-on:click="updateRestuarent">Update Restuarent</button>
    </form>

</template>

<script>
import NaV from './NaV.vue';
import axios from 'axios';
export default {
    name:'UpDate',
    data(){
        return{

            restuarent:{
                name:"",
                address:"",
                contact:"",
            }
        }
    },
    components:{
        NaV
    },
    methods:{
    async    updateRestuarent(){
            const result = await axios.put("http://localhost:3000/restuarent/"+this.$route.params.id,{
            name:this.restuarent.name,
            address:this.restuarent.address,
            contact:this.restuarent.contact,
         });
         if(result.status==200)
         {
            this.$router.push({name:'HoMe'})
         }
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get("http://localhost:3000/restuarent/"+this.$route.params.id);
        // console.log(result.data)
        this.restuarent=result.data
    }
    
}

</script>

<style>
.update input{
    width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto ;
  border: 1px solid skyblue;
}
.but{
    width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: blue;
  cursor: pointer;
}

</style>