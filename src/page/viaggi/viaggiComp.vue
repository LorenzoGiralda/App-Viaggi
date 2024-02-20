<template>

<div class="container-fluid row m-0 justify-content-center">

<div style="border: 3px solid #043D7D" class="my-5 col-12 col-md-10 col-lg-8 bg-white p-3 p-md-4 rounded">
    
<h2 class="text-center fw-bolder">{{filterTrav.citta}}</h2> 
    
<div class="col-12">
<img class="rounded img-fluid" :src="require('../../../img/'+ filterTrav.img)">    
</div>
    
<label class="mt-3 text-center col-12 fs-4 fst-italic">{{filterTrav.titolo}}</label>

<p class="mt-4 mb-0">{{filterTrav.descrizione}}</p>    
   
 <div class="mt-5 col-12 d-flex flex-wrap">
     
<div class="mb-3 mb-lg-0 col-12 col-lg-6 d-flex justify-content-start">
<div style="background: #2A86CA"  class="col-12 col-lg-11 d-flex p-2 justify-content-center align-items-center rounded">
<div>
<img style="width:40px;" src="../../../img/icon-fly.png">
</div>
<label class="ms-3 text-white">{{filterTrav.data}}</label>
</div>
</div>     

     
<div class="col-12 col-lg-6 d-flex justify-content-end">
<div style="background: #2A86CA" class="col-12 col-lg-11 d-flex p-2 justify-content-center rounded align-items-center ">
<div>
<img style="width:40px;" src="../../../img/icon-euro.png">
</div>
<label class="ms-3 text-white">{{filterTrav.prezzo}} / per 2 persone</label>
    </div>
</div>
   
</div>

    
<div class="mt-4 col-12 d-flex justify-content-center">
<button @click="addTravel(); addTotal()" style="background: #043D7B" class="btn col-12 py-2 fs-4 fw-bolder text-white rounded-pill">Acquista il viaggio</button>    
</div>

     
    
</div>    
  
</div>

</template>


<script>
export default{
computed:{
destinationId(){
return this.$route.params.id    
}, 
showTrav(){
return this.$store.getters['a/showTravel'] 
},
filterTrav(){
return this.showTrav.find(trav => trav.id == this.destinationId)    
}
}, 
    
methods:{
addTravel(){
this.$store.commit('a/addTravel',{id:this.filterTrav.id, citta:this.filterTrav.citta, prezzo: this.filterTrav.prezzo, img: this.filterTrav.img, titolo: this.filterTrav.titolo})   
},
    
addTotal(){
this.$store.commit('a/addTotal', this.filterTrav.prezzo)    
},    
},
};
</script>


<style scoped>

</style>
