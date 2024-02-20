<template>

<div class="container-fluid d-flex justify-content-center">
    
<div class="boxFilter d-flex align-items-center">
    
<div class="boxIcon">
<img style="width:26px;" src="../../img/icon-filter.png">     
</div>
    
<strong>FILTRA</strong>
</div>    
    
    
</div>

</template>



<style scoped>
    
    .boxIcon{
    display: flex;
    background: white;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 100px;
    }
    
    .boxFilter{
    padding: 8px 8px;
    display: flex;
     background: #043D7A;
    color: white;
    border-radius: 50px 50px;
    cursor: pointer;
    transition: 0.5s;
    }
    
    .boxFilter:hover{
    background: #F0A22A;
    color: #043D7A;
    }

</style>