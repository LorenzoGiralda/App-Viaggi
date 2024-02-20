<template>

<div class="cc p-0 container-fluid d-flex">
</div>

<div class="container-fluid bg-transparent h-auto d-flex flex-column align-items-center">
    
<banner-base class="col-12 col-lg-8 my-4" style="background:#F0A22A">
<h3>Scopri gli articoli sulle nostre <label>" Destinazioni da Sogno "</label></h3>
</banner-base>
    
<p class="titoletto">Tante informazioni e curiosità sulle nostre mete turistiche... <br>...da farvi rimanere senza alcun dubbio su quale "meta da sogno" scegliere per il vostro viaggio</p>
    
</div>



<!-- COMPONENTE CON CICLO FOR
     VARI BOX ARTICOLI VIAGGI -->

<div class="my-5 container-fluid row mx-0">
    
<!-- componente box ciclati -->
<for-blog
v-for="blog in forArticoli"
:key="blog.id"
:id="blog.id"
:citta="blog.citta"
:titolo="blog.titolo"
:descrizione="blog.descrizione"
:img="blog.img"
:button="blog.button"
:linke="blog.link">
</for-blog>
    
</div>

<!-- COMPONENTE CON CICLO FOR
     VARI BOX ARTICOLI VIAGGI -->


<div @click="goHome"  class="container-fluid d-flex justify-content-center my-3">
<banner-finale class="bgChange">
    
<div class="mb-2 mb-sm-0">
 <img style="width:35px" src="../../img/icon-word-final.png">   
</div> 
    
<a @click="goHome" class="resFinal">Scopri tutti i nostri viaggi "da sogno"</a>
</banner-finale>
</div>

</template>


<script>
    
    import forBlog from '../components/forBlog.vue';

    export default{
        
     components:{
    forBlog     
     }, 
        
computed:{
forArticoli(){
return this.$store.getters['b/showArt']  
},        
    
},
        
methods:{

    goHome(){
      this.$router.push('/')   
    }
    
}
        
    }; 

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
    
    
 .cc{
    
background-color: #F0A22A;
        
   background-image: url(../../img/travel-bg.jpg);
    height: 500px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
     font-family: "liza-display-new", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 100px;
        color:#043D7A;
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
    
    
    /* media query */
    
    @media (max-width: 991.98px){
        .cc{
            font-size: 70px;
        background-size: cover;
        height: 300px;
        }   
    }

</style>