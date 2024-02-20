<template>
<div class="p-0 container-fluid d-flex">
<label class="text-center d-flex justify-content-center align-items-center p-5">
Prenota il tuo viaggio da sogno!  
</label>
</div>

<carrello-comp></carrello-comp>


</template>

<script>
    
import carrelloComp from '../components/carrelloComp.vue'
    
export default{
data(){
return{
show: true,    
}   
},

components:{
carrelloComp,
},
    
computed:{
changeCar(){
return this.$store.getters['a/showTot'] 
},   
},   
};
</script>

<style scoped>

    .container-fluid{
    
background-color: aliceblue;
        
   background-image: url(../../img/travel-bg.jpg);
    height: 500px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
     font-family: "liza-display-new", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 100px;
        color:#043D7A;
    }
    
    label{
     width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    }
    
    
    /* media query */
    
    @media (max-width: 991.98px){
        .container-fluid{
            font-size: 70px;
        }   
    }
    
</style>