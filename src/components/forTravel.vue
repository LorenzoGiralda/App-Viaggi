<template>

<!-- BOX VIAGGIO COMPLETO -->
<div class="py-3 col-12 col-md-6 col-lg-4">
    
<div class="col-12 bg-white p-2 p-md-3 borders rounded">
    
<h2 class="text-center col-12 fs-2">{{citta}}</h2> 
    
<div class="col-12 mb-3">
<img class="img-fluid rounded" :src="require('../../img/'+ img)">    
</div>
    
<label class="col-12 text-center fst-italic">
{{titolo}} 
</label>
<hr class="col-12 opacity-100 text-blue mt-1 mb-3">
    
<p style="overflow: scroll;
  height:100px;" class="pHov text-center">{{descrizione}}
    </p>
    

<div class="BgBox rounded col-12 d-flex justify-content-center align-items-center mt-2">
<div>
<img style="width:40px" src="../../img/icon-fly.png">
</div>
<div class="ms-1">{{data}}</div>
</div>  
    
    
<div class="BgBox rounded col-12 d-flex justify-content-center align-items-center mt-2">
<div>
<img style="width:40px" src="../../img/icon-euro.png">
</div>
<div class="ms-1">{{prezzo}} / per due persone</div>
</div>
    
    
<button @click="addTravel(); addTotal()" class="rounded-pill mt-3 btn btn-warning col-12">
Acquista il viaggio    
</button>
<label class="col-12 text-center mt-1">Oppure <router-link :to="`/viaggi/${id}`">scopri di più</router-link></label>


</div>
    </div>
<!-- FINE BOX VIAGGIO COMPLETO -->


</template>

<script>
    
export default{

props:[
'id',
'citta',
'titolo',
'descrizione',
'data',
'prezzo',
'img'
      
],
    
methods:{
    
addTravel(){
this.$store.commit('a/addTravel',{id:this.id, citta:this.citta, prezzo: this.prezzo, img: this.img, titolo: this.titolo})   
},
    
addTotal(){
this.$store.commit('a/addTotal', this.prezzo)    
},    
},
    
computed:{
countA(){
return this.$store.getters['a/showCar']
},
},

};
</script>

<style scoped>
    
    .pHov{    
    }
    
    .pHov:hover{
     background: #f0f0f0;
    }
    
    h2{
        font-family: "fatfrank", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #043D7A;
    }
    
    .BgBox{
    background: #043D7A;
    color: white;
    }
    
    .borders{
    border: 2px solid #043D7A;
    }

</style>