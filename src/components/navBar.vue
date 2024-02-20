<template>

<nav style="background:#D8F0FD; position:sticky;top:0; z-index:4000" class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid resizeCont">
    <a class="navbar-brand" href="#">
    <img class="res" src="../../img/logo-agenzia.png">
    </a>
      
      <div class="d-flex">
    <button @click="addClass" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" :class="{active: isActive}"></span>
    </button>
      
            <!-- LINK COMPONENTE CARRELLO - LOGIN -->  
    <div class="compCarrello d-flex d-lg-none">
        
    <router-link to="/carrello" class="padImg">
      <img style="width: 21px; height: 20px" src="../../img/carrello-icon.png">
    </router-link>
    
      <a class="padImg">
      <img style="width: 16px; height: 20px" class="img-fluid" src="../../img/login-icon.png">
    </a>

    
    </div>
          
          </div>
      
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      
        
        <ul class="navbar-nav">
        
            
        <!-- BUTTON HOME -->
        
        <li @click="goHome(); ShowHC()" @mouseover="changeImg" @mouseleave="changeImg1"  class="nav-item"> 
         
            
       <router-link to="/" class="nav-link" aria-current="page">
        
        <div class="BoxTondo">
      
    <img v-if="HoverImg === true" class="imgNav" src="../../img/home-icon.png">
    <img v-else style="" class="imgNav" src="../../img/home-icon-hover.png">
       
    </div>
        
        <h3>HOME</h3>
            
        </router-link>
           
          
        </li>
            
            
        <hr class="solid">
            
        
        <!-- BUTTON BLOG -->
            
    <li @click="changeSF(); ShowHC()" @mouseover="changeImg2" @mouseleave="changeImg3"  class="nav-item"> 
          
    <router-link to="/blog" class="nav-link" aria-current="page">
        
    <div class="BoxTondo">
      
    <img v-if="HoverImg1 === true" class="imgNav1" src="../../img/blog-icon.png">
    <img v-else class="imgNav1" src="../../img/blog-icon-hover.png">
       
    </div>
        
        <h3>BLOG</h3>
            
        </router-link>
        
          <hr>      
        </li>
            
            <hr class="solid">
            
          <!-- BUTTON NAVIGAZIONE SITO -->
            
        <li @click="changeSF(); ShowHC()" @mouseover="changeImg4" @mouseleave="changeImg5"  class="nav-item marginMeno"> 
          
    <router-link to="/infoNav" class="nav-link" aria-current="page">
        
    <div class="BoxTondo">
      
    <img v-if="HoverImg2 === true" class="imgNav" style="" src="../../img/info-nav-icon.png">
    <img v-else style="" class="imgNav" src="../../img/info-nav-icon-hover.png">
       
    </div>
        
        <h3>INFO NAV</h3>
            
        </router-link>
            
        <hr>    
        </li>
          
       </ul>     
    
        
      <!-- LINK COMPONENTE CARRELLO - LOGIN -->  
    <div class="compCarrello d-none d-lg-flex">
        
    <router-link @click="changeSF(); ShowHC()" to="/carrello" class="padImg">
      <img style="width: 21px; height: 20px" src="../../img/carrello-icon.png">
    </router-link>
    
      <a class="padImg">
      <img style="width: 16px; height: 20px" class="img-fluid" src="../../img/login-icon.png">
    </a>

    </div>   
    </div>
  </div>
</nav>


</template>

<script>
    
export default{
    
    data(){
      
        return{
         isActive: false,
         HoverImg: true,
         HoverImg1: true,   
         HoverImg2: true,
        };  
    },
    
computed:{
        
showFil(){
return this.$store.getters['a/showFil']
},    
        
    },
 
    methods:{
        
ShowHC(){
this.$store.commit('b/hidenComm')       
},
        
changeSF(){
this.$store.commit('a/changeSF')  
    },

chiudiFiltro(){
this.$store.commit('a/changeButton')  
    },    

goHome(){
if(this.showFil.length > 0){
//alert("pagina refresh")
this.$router.go(this.$router.currentRoute)}
},        
  
        
    addClass(){
    
        this.isActive = !this.isActive
        
    },
        
        
    changeImg(){
    this.HoverImg = false;

    },  
        
      changeImg1(){
    this.HoverImg = true 
   
    },
        
        
        changeImg2(){
    this.HoverImg1 = false;
 
    },  
        
      changeImg3(){
    this.HoverImg1 = true 
    },
        
        
        changeImg4(){
    this.HoverImg2 = false;
    // this.boxTrue = true;
    },  
        
      changeImg5(){
    this.HoverImg2 = true 
    // this.boxTrue = false;
    },
       
        
    }
    
    
    
};
</script>

<style scoped>
    
    h3{
        font-family: "fatfrank", sans-serif;
        font-weight: 400;
        font-style: normal;
        margin: 0 0
    }
    
    .imgNav{
    width: 35px;    
    }
    
     .imgNav1{
    width: 25px;    
    }
    
    .BoxTondo{
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #043D7A;
    border: 2px solid #043D7A;
    margin-right: 10px;
    transition: 0.5s;
    }
    
    
    .nav-item:hover .BoxTondo{
    background: white;    
    }
    
    
    .nav-link{
        display: flex;
        align-items: center;
        color:#043D7A;
        padding: 0 0;
    }
    
       .nav-link.active, .nav-link:hover{
        
        color: #4B9DD9;
        
    }
    
    
    .navbar-toggler-icon{
    background-image: url(../../img/icon-hamburger.png)
  
    }
    
      .active{
    background-image: url(../../img/hamburger-icon-orange.png);
   
    }
    
    .navbar-toggler{
      border: 0px;
    box-shadow: none;
    padding: 0px;
    }
    
    .compCarrello{
    display: flex;
    background: #043D7A;
    padding: 5px 5px;
    border-radius: 30px;
    margin-left: 20px;
    
    }
    
    
    .padImg{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 30px;
    cursor: pointer;
        transition: 0.5s;
    }
    
    
     .padImg:hover, .padImg.router-link-active{
    background: orange;
 
    }
    
    .resizeCont{
    padding-left:20px;  
    padding-right:20px;
    }
    
    .res{
    width: 200px;    
    }
    
    
    .nav-item{
    display: flex;
    margin-right: 40px;
    }
    
    
     .navbar-brand{
            padding-left: 0px;
        }
    
    
    hr{
    border-bottom: 3px solid blue;
    margin: 0 0;
    }
    
    
    .router-link-active{
    color: #4B9DD9;

    }
    
    /* MEDIA QUERY */

    @media (max-width: 575.98px) {
        
     .padImg{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 28px;
    height: 28px;
    background: white;
    border-radius: 30px;
    cursor: pointer;
        transition: 0.5s;
    }
        
      .compCarrello{
    display: flex;
    background: #043D7A;
    padding: 5px 5px;
    border-radius: 30px;
    margin-left: 20px;
    
    }
        
        
    .res{
    width: 180px;    
    }
        
        
     .navbar-brand{
         width: 100%;
        display: flex;
        justify-content: center;
         margin-bottom: 16px;
        }
        
        
        .resizeCont{
    justify-content: center;
    }
        
    }


    @media (max-width: 767.98px) {
        
    }


    @media (max-width: 991.98px) {
     
    .nav-item{
    display: flex;
    margin-right: 0px;
    margin-top:20px;
    }
        
    .resizeCont{
    padding-left:0px;  
    padding-right:0px;   
    }
        
        li{
          margin: 20px 20px
        }
        
           .nav-link{
        width: 100%;
    }
        
    
    .compCarrello{
    margin-right: 20px;
    
    }
        
      .navbar-brand{
            padding-left: 20px;
            padding-bottom: 5px;
        }
        
    }


    @media (max-width: 1199.98px) {
        
    }


    @media (max-width: 1399.98px) {
        
    }


    
</style>