<template>

<div class="box">

    <slot></slot>
    
</div>

</template>

<style scoped>
    
    
    .box{
    border-radius: 100px 100px;
    color: white;
    padding: 13px 23px;
    text-align: center;
    }
    
    
     /* MEDIA QUERY */

    @media (max-width: 575.98px) {
      .box{
    border-radius: 20px 20px;
        margin: 10px 10px;
    }    
    }

</style>