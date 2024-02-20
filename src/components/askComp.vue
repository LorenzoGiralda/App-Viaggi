<template>
<div style="background:#043D7A; color: white" class="d-flex flex-wrap p-2 rounded mt-3">
    
<label :class="{noPoint: showHideC}" @click="ShowHC" for="exampleFormControlTextarea1" class="LabelC w-100 text-center form-label p-0 mb-0">Commenta l'articolo</label>
    
<div v-if="showHideC === true" class="w-100">
 <textarea v-model="ask" class="mt-2 form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<button @click="addAsk" type="button" class="w-100 buttonInvia mt-3 btn">Invia</button>
</div>
    
</div>
</template>

<script>
    export default{
        
    props:[
    'id'    
    ],    
        
    data(){
    return{
    ask:"",    
    };    
    },
        
    computed:{
        
    showHideC(){
    return this.$store.getters['b/showCom']      
    },
        
    },
        
methods:{
addAsk(){
if(this.ask.length > 0){    
this.$store.commit('b/addAsk',{
testo: this.ask, id: this.id  
})     
}   
this.ask = "";   
},
        
        
ShowHC(){
this.$store.commit('b/hideShowComment')       
},        
        
    },   
    };
</script>

<style scoped>
    .buttonInvia{
    background:#cccccc;
    border: 0;
    }
    
     .buttonInvia:hover,.buttonInvia:active{
     background:#adacac;
    color: black
    }
    
    .LabelC{
    cursor: pointer;
    }
    
    .noPoint{
    cursor: auto;
    }
    

</style>