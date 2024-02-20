<template>

<div class="mt-5 d-flex justify-content-center">
    
<div style="border-2px solid white" class="col-10 col-sm-6 col-lg-3 d-flex justify-content-center boxTitle text-white  py-2 px-5 rounded-top justify-items-center align-items-center">
    
<div>
<img style="margin-right:15px;" src="../../img/icon-big-carrello.png">
</div>

<label>CARRELLO</label> 
    
</div>

</div>

<div v-if="showCar.length <= 0"
class="pb-5 m-0 container-fluid row justify-content-center text-white"> 
    
<div style="border:2px solid white; background:#043D7A" class="col-12 col-lg-6 rounded p-3 d-flex align-items-center flex-column">

Carrello vuoto
    </div>
</div>


<div v-else
class="pb-5 m-0 container-fluid row justify-content-center text-white"> 
    
<div style="border:2px solid white; background:#043D7A" class="col-12 col-lg-6 rounded p-3 d-flex align-items-center flex-column">
    
<!-- box viaggio -->
    
<!-- nome - descrizione -->
<div
v-for="car in showCar"
:key="car.id"
:citta="car.citta"
:img="car.img"
:prezzo="car.prezzo"
:titolo="car.titolo"
class="col-12 row justify-content-center">
    
<div class="col-12 d-flex justify-content-center">
<div class="col-10 d-flex flex-column align-items-center">
<h3 class="m-0">{{car.citta}}</h3>
    
<p class="mb-0 text-center">{{car.titolo}}</p>    
</div>
    
</div>
    
<div class="col-12 mt-2">
<img class="img-fluid" :src="require('../../img/'+ car.img)">  
</div>
    
<div class="mt-3 col-12 d-flex justify-content-center align-items-center">
    
<div style="margin-right:10px; color:#043D7A" class="rounded p-1 bg-white">
{{car.prezzo}}
</div>
<div>€ / per due persone
</div>

</div>
   
<hr style="" class="mt-3 col-10 opacity-100">

</div> <!-- fine box viaggio -->
      
<!-- box prezzo totale -->
    
<div style="color:#043D7A" class="col-10 col-sm-6 col-lg-5 bg-white d-flex justify-content-center align-items-center align-content-start rounded p-1">
<div style="padding-top:2px">TOTALE</div>
<strong class="" style="margin-left:8px;font-size:20px;">{{showTot}} € </strong> 
    </div>
    
<hr style="" class="col-10 opacity-100">

<!-- fine box prezzo totale -->
    
<button class="btn col-10">
ACQUISTA    
</button>
    
<div class="mt-2">oppure torna alla <a @click="this.$router.push('/')" class="linkm" href="#">home</a></div>
    
    
</div>    
    
</div>

</template>


<script>
export default{ 
computed:{
showCar(){
return this.$store.getters['a/showCar']
},
showTot(){
return this.$store.getters['a/showTot']
},
},       
};
</script>


<style scoped>
    
    .linkm{
    color: white;
    font-weight: bold;
    }
    
    .btn{
    color: #043D7A; 
    border: none;
    background: #F0A226;
    font-weight: bolder;
    font-size: 20px;
    }
    
    .btn:hover, btn.active{
    color: #043D7A;
    background: #f7af40;
    }
    
    
    label{
    font-family: "fatfrank", sans-serif;
    font-size: 30px;
    font-style: normal;
    margin: 0 0;   
    }
    
    .boxTitle{
    background: #043D7A;;
    border: 2px solid #043D7A;
    }

</style>