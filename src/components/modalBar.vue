<template>
<div class="stileDiv d-flex flex-column justify-content-center align-items-center">  
<h3 class="p-2 text-center">Ciao, nessun parametro trovato!</h3>
<div class="d-flex flex-column d-sm-block">
<button @click="hideModal" class="btn btn-light mb-3 mb-sm-0">Guarda tutti i risultati</button> 
<button @click="changeTrue();hideModal()" class="mx-2 btn btn-primary">Filtra nuovamente</button>
</div>    
</div>
</template>


<script>
export default{
methods:{
hideModal(){
this.$store.commit('a/hideModalBar')   
},
changeTrue(){
this.$store.commit('a/changeButton')   
},    
}   
}
</script>

<style scoped>
    .stileDiv{
    z-index: 6000;
    background: rgba(0, 0, 0, 0.54);
    width: 100%;
    height: 100%;
    position: fixed;
    color: white
    }

</style>
