<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue'
import FullFooter from '@/components/footer/FullFooter.vue'
import CardBox from '@/components/card/CardBox.vue'
import CardMovel from '@/components/card/CardMovel.vue'
import CarouselOne from '@/components/CarouselOne.vue'
import DropDown from '../components/card/DropDown.vue'

</script>
<template>
  <header-principal />
  <carousel-one/>
  <drop-down />
  <div id="Max">
    <card-movel />
    <card-box />
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
