<template>

<div class="container-fluid row m-0 justify-content-center">

<div style="border: 3px solid #043D7D" class="my-5 col-12 col-md-10 col-lg-8 bg-white p-3 p-md-4 rounded">
    
<h2 style="color:#043D7A" class="text-center fw-bolder">{{filterData.citta}}</h2> 
    
<div class="col-12">
<img class="rounded img-fluid" :src="require('../../../img/'+ filterData.img)">    
</div>
    
<label class="mt-3 text-center col-12 fs-4 fst-italic">{{filterData.titolo}}</label>

<p v-html="filterData.descrizione" class="mt-4 mb-0"></p> 
    
<div v-if="askView.length > 0" class="mt-3 p-0 rounded d-flex flex-column">
<p class="abc p-2 rounded m-0 mt-2 fst-italic" v-for="ask in filterComment"
:key="ask.id"
:testo="ask.testo"
>
{{ask.testo}}
</p>    
</div>
 
<ask-comp
:id="filterData.id"
></ask-comp>
    
</div>    
    
</div>

</template>

<script>
    
import askComp from '../../components/askComp.vue'
    
export default{
    
components:{
askComp    
},
    
data(){
return{ 
};    
},
    
methods:{
showCol(){
console.log(this.filterData)    
}    
},
    
computed:{
    
askView(){
return this.$store.getters['b/askView']     
},
    
destinationId(){
return this.$route.params.id    
},
 
showArt(){
return this.$store.getters['b/showArt'] 
},
    
filterData(){
return this.showArt.find(art => art.id == this.destinationId)    
},
    
filterComment(){
return this.askView.filter(ask => ask.id == this.destinationId)    
}
    
},
      
    
};

</script>





<style scoped>
    .abc{
    width: fit-content;
    background: #2A86CA;
    color:white
    }

</style>