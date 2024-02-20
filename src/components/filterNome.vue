<template>

<div style="background:#043D7A;" class="row col-12 col-lg-10  p-2 rounded align-items-center mt-4">

<div class="d-flex bg-white rounded p-2 justify-content-between">
    
<div style="margin-right:16px" class="">
<img src="../../img/icon-search.png">
</div>

 <input v-model="search" name="search" type="email" class=" text-end form-control" placeholder="scrivi le iniziali o il nome completo della città">
</div>
   
    </div>


<div class="row col-12 col-lg-10 mt-3">
    
<div class=" d-flex justify-content-end col-12 p-0">
    
<div v-if="search.length > 0" style="padding:5px" class="p-0 col-12 col-lg-4 d-flex rounded bg-white">
    
<div style="" class="p-2 d-flex flex-wrap col-12 bg-white rounded align-items-center justify">
    
<div v-for="city in filteredList"
:key="city.id"
:citta="city.citta"
style="background:#043D7A; color:white"  class="col-12 p-3 text-end ">
<label class="hovB" @click="this.$router.push(`/viaggi/${city.id}`)">{{city.id}}</label>
</div>
   
</div>

</div>

</div>
</div>

</template>

<script>
export default{
data(){
return{
search: "",    
}    
},
computed:{

forTravel(){
return this.$store.getters['a/showTravel']  
},
    
    
filteredList() {
return this.forTravel.filter(tra => {return tra.id.toLowerCase().includes(this.search.toLowerCase())
      })
    },   
},
}
</script>

<style scoped>
    
    .hovB{
    cursor: pointer   
    }
    
.hovB:hover{
   color: #F0A22A;  
    }

</style>