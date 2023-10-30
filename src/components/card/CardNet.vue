<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useTvStore } from '@/stores/tv.js';
import { onMounted, ref } from 'vue';
const tvStore = useTvStore()

const counter = ref(1)

onMounted(async () => {
    await tvStore.getAllTv()
    
})
</script>

<template>
  <div class="container-top">
    <h1 class="textPrincipal">Brasil: Top 10 em séries hoje</h1>
    <div class="container-card">
      <carousel :items-to-show="6.0" class="Margin">
        <slide v-for="series in tvStore.tvs" :key="series.id">
          <div class="img-card">
            <div class="img-container">
                <div>{{ counter }}</div>
                <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.title" width="150" />
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped>
.textPrincipal {
  font-size: 26px;
  font-weight: bold;
}
.container-top {
  margin-top: 5rem;
}
.container-card
{
    margin-top: 5rem;
}
</style>
