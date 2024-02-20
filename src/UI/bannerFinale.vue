<template>

<div class="boxFinale px-4 py-3">
    
<slot></slot>    
    
</div>

</template>


<style scoped>
    
    .boxFinale{
      padding: 10px 10px;
      border-radius: 100px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }
    
    
        /* MEDIA QUERY */

    @media (max-width: 575.98px) {
        
      .boxFinale{
   flex-direction: column;
    text-align: center;
    border-radius: 20px 20px;
    }    
    }


</style>