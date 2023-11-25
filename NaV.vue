<template>
<div class="nav">
    <router-link to="/" href="#">Home</router-link>
    <router-link to="/add" href="#">Add Restuarent</router-link>
    <a v-on:click="logout" href="#">LogOut</a>
</div>


</template>

<script>
export default {
    name:'NaV',
    methods:{
        logout(){
           localStorage.clear();
           this.$router.push({name:'LoGin'})
        }
    }
}



</script>


<style>
.nav{
    background-color: #333;
    overflow: hidden;
    margin-left: 20px;
}
.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding:16px 14px ;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
    margin-left:0 ;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
}



</style>