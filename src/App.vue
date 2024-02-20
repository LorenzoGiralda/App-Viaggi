
<template>

<nav-bar></nav-bar>

<router-view></router-view>

<footer-bar></footer-bar>

</template>



<script>
        
import navBar from './components/navBar.vue';
import footerBar from './components/footerBar.vue';
    
export default {
components: {
navBar,
footerBar
  }
};
    
</script>


<style>
    
    body{
    
    background-image: url(../img/bg-body.png);
    background-position: center center;
    background-size: cover;
    font-family: 'Montserrat', sans-serif;
    }
    
</style>
