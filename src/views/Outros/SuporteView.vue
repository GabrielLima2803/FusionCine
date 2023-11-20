<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
</script>

<template>
    <header-principal/>
    <div class="container-max">
        <h1>Suporte do FusionCine</h1>
        <div class="d-flex justify-content-around marginTop">
            <div class="box">
                <p>Conversas</p>
            </div>
            <div class="box">
                <p>Conversas</p>
            </div>
            <div class="box">
                <p>Conversas</p>
            </div>
        </div>
    </div>
    <div class="container-box">
        <div>

        </div>
        <div class="big-box">
            <div>
                <h1 class="">Sessões</h1>
            </div>
        </div>
    </div>
    <full-footer/>
</template>

<style scoped>
.container-max{
    max-width: 1420px;
    margin: 0 auto;
    margin-top: 125px;
}
h1{
    font-size: 38px;
    font-weight: bold;
    text-align: center;
}
.box{
    background-color: #f5f5f7;
    padding: 40px 8.33%;
    width: 300px;
    height: 150px;
    transition: all .2s ease-in-out; 
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.marginTop{
    margin-top: 100px;
}
.box:hover{
    transform: scale(1.1);  
}
.container-box{
    background-color: rgb(219, 219, 219);
    margin-top: 100px;
    padding: 30px;
}
.big-box{
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    color: black;
    border-radius: 10px;
    width: 1000px;
    height: 500px;

}
</style>