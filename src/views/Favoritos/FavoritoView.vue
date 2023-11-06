<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
</script>

<template>
    <header-principal/>
    <div class="favoritos">
       <h1>Favoritos ()</h1>
    </div>
    <full-footer/>
</template>

<style scoped>
.favoritos{
    font-size: 30px;
    max-width: 1220px;
    margin: 0 auto;
    margin-top: 125px;
}
</style>
