<template>

<div class="mt-4 container-fluid d-flex justify-content-center">
    
<p class="col-12 col-lg-10 paraT fw-bold fs-5">Informazioni utili su come navigare e sfruttare al meglio tutta la logica e le funzionalità dell'app</p>
    
</div>


<!-- BOX NAV -->
<div class="p-0 m-auto my-5 container row justify-content-center">

<div class="col-12 col-lg-8 row justify-content-center pb-3">
    
<div style="border: 3px solid #043D7D" class="border-bottom-0 col-10 col-lg-8 d-flex flex-column flex-sm-row bg-white p-2 rounded-top justify-content-center align-items-center">
<div><img style="width:80px" src="../../img/icon-infonav-big.png"></div>
<label style="color:#043D7A" class="text-uppercase fw-bolder fs-4 ms-0 ms-sm-3">info navigazione</label>
</div>
    
<!-- BOX LOGICHE -->
<div style="border: 3px solid #043D7D" class="col-12 d-flex flex-wrap bg-white rounded px-3 pb-3">
    

<div class="col-12"
v-for="info in showInfo"
:key="info.id"
:title="info.title"
:descrizione="info.descrizione"
:numero="info.numero"
>
<!-- PRIMA LOGICA -->    
<div class="col-12  d-flex align-items-center mt-3">
<div style="background:#043D7A" class="fw-bold rounded-pill px-3 py-1 text-white">
{{info.numero}}
</div> 
    
<label class="back ms-2 fw-bold text-uppercase">
{{info.title}}
</label>
</div>
    
<p class="col-12 mb-0 mt-2">
{{info.descrizione}}
</p>
<hr class="col-12 mt-2 mb-0 text-blue opacity-100">
    
    
 </div> 
<!-- fine BOX LOGICHE -->
</div>


    

    
</div>    
</div>
<!-- FINE BOX INFO NAV -->

</template>

<script>
export default{
computed:{
showInfo(){
return this.$store.getters['c/infoNav'] 
}    
}    
};
</script>

<style scoped>
    
    .back{
        color: #043D7A;
    }
    
    .paraT{
    background: orange;
    padding: 20px 20px;
    text-align: center;
    border-radius: 100px 100px;
    }

      /* MEDIA QUERY */

@media (max-width: 575.98px) {
   .paraT{
  
    border-radius: 20px 20px;
    }
}
    
</style>