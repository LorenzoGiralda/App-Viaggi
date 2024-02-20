<template>

<footer class="d-flex align-items-center justify-content-center">
    <img class="imgMarg" style="width: 150px;" src="../../img/icon-logo-white.png">
    <p class="m-0 mt-3 mt-lg-0 text-white text-center">Via Palinuro, ## - Grotte di Castro  |  Tel. 0761 #######  - Cell. 345 #######  |  C.F. / P.IVA:  01234##########</p>
        
</footer>

</template>

<script>

</script>

<style scoped>
    
    footer{
        background: #2A86CA;
        padding: 10px 10px;
    }
    
    
    .imgMarg{
    margin-right: 30px;    
    }
    
    
    /* media query */
    
     @media (max-width: 991.98px) {
         
          footer{
        flex-wrap: wrap;
    }
         
         .imgMarg{
    margin-right: 0px;    
    }
      
         p{
            width: 100%;
         }
       
       
    }
    
    

</style>