<template>

<div style="overflow:scroll" class="boxFilter w-100">

<div class=" m-0 container-fluid d-flex flex-column align-items-center 
justify-content-center p-3">
    
    
<div class="resizeBoxFilter row col-12 col-sm-10 bg-white pt-0 p-3 rounded mb-0">
 <div class="col-12 d-flex justify-content-center">
 <h3 style="font-family: fatfrank,sans-serif;
font-weight: 400;
font-style: normal;background:#043D7A;" class="p-3 mb-5 rounded-bottom text-white">FILTRA  DESTINAZIONI</h3>  
                                                                                  
</div>   

   
    
<!-- select "mese-viaggio -->
    
 <div class="mb-4 mb-lg-0 col-12 col-lg-4">

<label class="mb-2"><strong>
Mese viaggio
</strong></label>   

 <select name="meseTravel" v-model="meseTravel" class="form-select" aria-label="Default select example" required>
     
 <option value="null">seleziona mese</option>
     
<option value="gennaio">gennaio </option>
     
<option value="febbraio">febbraio</option>
     
<option value="marzo">marzo</option>
     
<option value="aprile">aprile</option>
     
<option value="maggio">maggio</option>
     
<option value="giugno">giugno</option>
     
<option value="luglio">luglio</option>
     
<option value="agosto">agosto</option>
     
<option value="settembre">settembre</option>
     
<option value="ottobre">ottobre</option>
     
<option value="novembre">novembre</option>
     
<option value="dicembre">dicembre</option>
     
</select>   
    
</div>  
    
    
<!-- input durata-viaggio -->

<div class="mb-4 mb-lg-0 col-12 col-lg-4">
    
<div class="col-12">
    <label class="mb-2"><strong>Durata del viaggio</strong></label>   
</div>  

 <select name="durataTravel" v-model="durataTravel" class="form-select" aria-label="Default select example">
     
 <option value="null">seleziona settimane</option>
     
     <option value="7">1 settimana</option>
     
          <option value="14">2 settimane</option>
     
         <option value="21">3 settimane</option>
     
      <option value="28">4 settimane</option>
     
    </select>
    
</div>
    
    
    

<!-- input prezzo-viaggio -->

<div class="col-12 col-lg-4">
    
<div class="col-12">
    <label class="mb-2"><strong>Prezzo viaggio (max)</strong></label>   
</div>  
<div class="col-12 d-flex align-items-end">
  <input v-model="prezzoTravel" type="number" class="form-control text-end" id="exampleFormControlInput1" placeholder="es. 2000">
<label style="margin-left:10px">€</label>
</div>
    
</div>
    
    
<!-- radio-btn regione -->
  
<div class="paddR col-12 mt-4 mb-2 row">
   

<label><strong>Regione</strong> </label>  
  
<div class="paddR d-flex col-12">
    
<div class="mt-1 mt-lg-0 flex-column flex-lg-row d-flex col-12 justify-content-between">
    
<div class="d-flex">
  <input class="form-check-input" type="radio" 
v-model="regioneTravel"
value="Asia"
name="regioneTravel" id="Asia">
  <label class="mx-2 form-check-label" for="Asia">
  Asia
  </label>
</div>
    
<div class="mt-1 mt-lg-0 d-flex">
  <input class="form-check-input" type="radio" value="America"
v-model="regioneTravel"    
name="regioneTravel" id="America">
  <label class="mx-2 form-check-label" for="America">
  America
  </label>
</div>
    
<div class="mt-1 mt-lg-0 d-flex">
  <input class="form-check-input" type="radio" value="Europa" 
v-model="regioneTravel"         
name="regioneTravel" id="Europa">
  <label class="mx-2 form-check-label" for="Europa">
 Europa
  </label>
</div>
    
    
<div class="mt-1 mt-lg-0 d-flex">
  <input class="form-check-input" type="radio" value="Africa"
v-model="regioneTravel"         
name="regioneTravel" id="Africa">
  <label class="mx-2 form-check-label" for="Africa">
  Africa
  </label>
</div> 
    
    
<div class="mt-1 mt-lg-0 d-flex">
  <input class="form-check-input" type="radio" value="Australia"
v-model="regioneTravel"         
name="regioneTravel" id="Australia">
  <label class="mx-2 form-check-label" for="Australia">
  Australia
  </label>
</div>
    
    
<div class="mt-1 mt-lg-0 d-flex">
  <input class="form-check-input" type="radio" value="Altro"
v-model="regioneTravel"         
name="regioneTravel" id="altro">
  <label class="MarginL form-check-label" for="altro">
  altro
  </label>
</div> 
    
 </div>   
    </div>
    </div>
    
    
    
 <hr class="my-4"> 
    
<div class="row p-0 m-0">
 

<div class="order-2 order-lg-1 col-12 col-sm-6 col-lg-3 d-flex">
<button @click="actNome" type="button" class="btn btn1 w-100">{{filterNome ? 'Chiudi filtra per nome' : 'Filtra per nome'}}</button>    
</div>  

 <div class="order-1 order-lg-2 col-12 col-lg-6 mb-4 mb-lg-0 d-flex">
<button @click="changeFalse(); addFilt();" type="button" class="w-100 btn btnBig bolder">VISUALIZZA LE DESTINAZIONI </button>   
</div>   

<div style="" class="order-3 col-12 col-sm-6 col-lg-3 mt-2 mt-sm-0 d-flex">
<button @click="goHome" type="button" class="btn btn2 w-100 ">Torna alla home</button>    
    
</div>   


    
</div>
    
</div>
    

    
<!-- componente filtra nome -->      
 <filter-nome v-if="filterNome === true"></filter-nome>   
     
</div>  

    </div>
    
</template>



<script>
    
import filterNome from './filterNome.vue'
    
export default{
 
    components:{
    filterNome,    
    },
    
    data(){
    return{ 
        
    filterNome: false,
    showFilt: false,
        
    meseTravel: null,
    durataTravel: null,
    prezzoTravel: null,
    regioneTravel: null,

    };
    },
    

computed:{
ChangeBtn(){
return this.$store.getters['a/showBtn']  
},
    

     
    },
    
    
methods:{

addFilt(){
    
if(this. meseTravel == null || this.durataTravel == null || this.prezzoTravel == null || this.regioneTravel == null){
 alert("Compila tutti i campi") 
}else{
this.$store.commit('a/addFilt',{mese: this.meseTravel, durata: this.durataTravel, prezzo: this.  prezzoTravel, regione: this.regioneTravel}) 
}
this.meseTravel = null
this.durataTravel = null
this.prezzoTravel = null
this.regioneTravel = null

},
    

    
changeFalse(){
if(this. meseTravel == null || this.durataTravel == null || this.prezzoTravel == null || this.regioneTravel == null){
return;    
}else{
this.$store.commit('a/changeButton')} 
},   
        
actNome(){
this.filterNome = !this.filterNome    
    },
        
    goHome(){
 //this.$router.push('/blog')
this.$router.go(this.$router.currentRoute)
},    
    }
    
}

</script>



<style scoped>
    
  
    
    .btn1{
     background: #043D7A;
    padding: 10px 10px;
    color: white;
    border: 0px;
    }
    
      .btn1:hover, .btn1.active{
        color: white;
     background: #0556ad;
    
    }
    
    .btn2{
     background: #a09f9f;
    padding: 10px 10px;
    color: white;
    border: 0px;
    }
    
       .btn2:hover, .btn2.active{
     background: #b7b7b7;
    padding: 10px 10px;
    color: white;
    border: 0px;
     background: #b7b7b7;
    }
    

    
    .btnBig{
    background: #F0A22A;
    padding: 10px 10px;
    border: 0px;
    font-family: "fatfrank", sans-serif;
    font-size: 20px;
    }
    
    
      .btnBig:hover, .btnBig.active{
    background: #f7af40;
    padding: 10px 10px;
    border: 0px;
    }
    
    
    
    .paddR{
    padding-right: 0px;    
    }
    
    .MarginL{
        margin-left: 8px;
    }
    
    .boxFilter{
    background: rgba(0, 0, 0, 0.81);
   z-index: 5000;
   position: fixed;
   top: 0px;
    height: 100%;
    
    }
    
    .resizeBoxFilter{
border: 2px solid #043D7A;
       
    }
    
    
/* input number senza frecce */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
    
</style>