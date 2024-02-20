<template>

<!-- BOX ARTICOLO COMPLETO -->
<div class="py-3 col-12 col-md-6 col-lg-4">
    
<div class="col-12 bg-white p-2 p-md-3 borders rounded">
    
<h2 class="text-center col-12 fs-2">{{citta}}</h2> 
    
<div class="col-12 mb-3">
<img class="img-fluid rounded" :src="require('../../img/'+ img)"> </div>
    
<label class="col-12 text-center fst-italic">
{{titolo}} 
</label>
    
<hr class="col-12 opacity-100 text-blue mt-1 mb-3">
 
    
<!-- <p class="pHov text-center" v-html="descrizione">
    </p> -->
    
    

<button @click="this.$router.push(`/destinazioni/${id}`)" class="btn btn-primary col-12">{{button}}</button> 

    
</div>  
    </div>
<!-- FINE BOX ARTICOLO COMPLETO -->


</template>

<script>
    
export default{

props:[
'id',
'citta',
'img',
'titolo',
'descrizione',
'button',
'link',
],

data(){
return{
};  
},
    
computed:{  
    
},
    
methods:{
    
}

};
</script>

<style scoped>
    
    .btn{
    background: #043D7A;
    border: none;
    color: white;
    }
    
    .btn:hover, .btn.active{
     background: orange;
    color: white;
    }
    
.pHov{ 
overflow: scroll;
height:100px;
    }
    
.pHov:hover{
background: rgb(234, 234, 234);
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