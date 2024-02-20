<template>

<modal-bar v-if="forMod == true"></modal-bar>

<filter-box v-if="ShowBtn === true">
</filter-box>
    

<!-- slide show -->

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    
  <div class="carousel-inner">
      
    <div class="carousel-item active" data-bs-interval="10000">
      
    <img src="../../img/slide-fi.jpg" class=" d-none d-lg-flex d-block w-100">
        
    <img src="../../img/fi-resp.jpg" class="d-block w-100 d-flex d-lg-none">
        
    </div>
      
    <div class="carousel-item" data-bs-interval="2000">
        
        <img src="../../img/slide-rm.jpg" class=" d-none d-lg-flex d-block w-100">
        
    <img src="../../img/roma-resp.jpg" class="d-block w-100 d-flex d-lg-none">
        
    </div>
      
    <div class="carousel-item">
        
      <img src="../../img/slide-pr.jpg" class=" d-none d-lg-flex d-block w-100">
        
    <img src="../../img/par-resp.jpg" class="d-block w-100 d-flex d-lg-none">
        
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<!-- COMPONENTE GRAFICO -->

<div class="container-fluid bg-transparent h-auto d-flex flex-column align-items-center">

<banner-base class="col-12 col-lg-8 my-4" style="background: #2A86CA;">
<h3>ACQUISTA IL TUO <label>"Viaggio da Sogno"</label></h3>
</banner-base>

<p class="titoletto">Esperienze uniche per vivere una vacanza di coppia indimenticabile!</p>

</div>


<filter-button @click="showFilter(); changeTrue();svuotaArray()"> </filter-button>




<!-- COMPONENTE CON CICLO FOR
     VARI BOX VIAGGI -->

<div class="my-5 container-fluid row mx-0">
    
<!-- componente box ciclati -->
<for-travel
v-for="trav in ShowM"
:key="trav.id"
:id="trav.id"
:citta="trav.citta"
:regione="trav.regione"
:titolo="trav.titolo"
:descrizione="trav.descrizione"
:data="trav.data"
:mese="trav.mese"
:giorni="trav.giorni"
:prezzo="trav.prezzo"
:img="trav.img">
</for-travel>
    
</div>

<!-- COMPONENTE CON CICLO FOR
     VARI BOX VIAGGI -->




<div @click="goBlog"  class="container-fluid d-flex justify-content-center my-3">
<banner-finale class="bgChange">
    
<div class="mb-2 mb-sm-0">
 <img style="width:35px" src="../../img/blog-icon.png">   
</div>    
    
<a class="resFinal">Scopri gli articoli sulle nostre "destinazioni da sogno"
</a>
</banner-finale>
</div>
    
</template>



<script>

import filterBox from '../components/filterBox.vue';
import forTravel from '../components/forTravel.vue';
import modalBar from '../components/modalBar.vue';
    
export default{
    
components:{
filterBox, 
forTravel,
modalBar,
},
    
data(){
    
return{
// filter: false,
fortTo: this.fortT,
    }
    
    
},
    
computed:{

    
forMod(){
return this.$store.getters['a/showMo'] 
},    
    
    
forTravel(){
return this.$store.getters['a/showTravel']  
},

    
ShowM(){   
return this.$store.getters['a/constFil'] 
},
    
    
ShowBtn(){
    
return this.$store.getters['a/showBtn']  
},
        
    
forT(){
return this.$store.getters['a/showFil']  
},
    
showMo(){
return this.$store.getters['a/showMo']  
},
     
},
 
methods:{
    
goBlog(){
 this.$router.push('/blog')
},
    
showFilter(){
this.filter = true;    
},
    
changeTrue(){
this.$store.commit('a/changeButton')   
},
    
svuotaArray(){
this.$store.commit('a/svuotaArray')   
},
         
},
    
    
}
</script>



<style scoped>
    
    
    .bgChange{
     background: rgb(240, 162, 42);
    transition: 0.5s;
    }
    
    
     .bgChange:hover{
     background: #043D7A;
  
    }
    
    
    .bgChange:hover .resFinal{
    color: white;
    }
    
    .resFinal{
    font-weight: bold;
    font-size: 20px;
    margin-left: 15px;
    text-decoration: none;
     transition: 0.5s;
    color: #043D7A;
    }
    
    .imgResp{
    margin-right: 20px;    
    }
    
    label{
        font-family: "liza-display-new", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 60px;
    }
    
    
    h3{
      font-family: "fatfrank", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 32px;
        margin: 0 0  
    }
    
    
    .titoletto{
     text-align: center;
     font-weight: 400;
    font-style: italic;
    font-size: 20px;
    
    }

</style>