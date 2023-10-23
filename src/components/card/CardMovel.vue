<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import {imgs} from '@/_data/img.js'

</script>

<template>
  <h1 id="Text-h1">Tendências</h1>
  <carousel :items-to-show="4.2" class="Margin">
    <slide v-for="img in imgs" :key="img.id">
      <div class="img-card">
        <div class="img-container">
          <img :src="img.src" alt="" width="300"  class="img" />
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<style scoped>
.Margin {
  margin-bottom: 80px;
}

#Text-h1 {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: bold;
}
.img{
    border-radius: 10px;
    /* /* width: 100%; */
    /* height: 100%;  */
}
.img-card {
  text-align: center;
  min-height: 0;
  height: auto;
}

h6 {
  font-weight: 700;
  margin-top: 20px;
}

.img-card h6 {
  margin-top: 10px;
}
</style>
