<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue'
import FullFooter from '@/components/footer/FullFooter.vue'
import CardBox from '@/components/card/CardBox.vue'
import CardMovel from '@/components/card/CardMovel.vue'
import CardNet from '@/components/card/CardNet.vue'
import CarouselOne from '@/components/CarouselOne.vue'

</script>
<template>
  <header-principal />
  <carousel-one/>
   <div id="Max">
    <card-movel />
    <card-box />
    <card-net/>
  </div>
  <full-footer />
</template>

<style scoped>
#Max {
  max-width: 1420px;
  clear: both;
  margin: 0 auto
}

</style>
