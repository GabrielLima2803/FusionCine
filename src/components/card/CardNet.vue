<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useTvStore } from '@/stores/tv.js';
import { onMounted, ref } from 'vue';
const tvStore = useTvStore()

const infoVisible = ref(-1) // Inicialmente, nenhum índice de filme está visível

onMounted(async () => {
  await tvStore.getAllTv()
})

const showInfo = (index) => {
  // Mostra as informações adicionais quando o mouse passa por cima
  infoVisible.value = index
}

const hideInfo = () => {
  // Esconde as informações adicionais quando o mouse sai de cima
  infoVisible.value = -1
}
</script>

<template>
  <div class="container-top">
    <h1 class="textPrincipal">Brasil: Top 10 em séries hoje</h1>
    <div class="container-card">
      <carousel :items-to-show="2.8" class="Margin">
        <slide v-for="(series, index) in tvStore.tvs" :key="series.id">
          <div class="img-card">
            <div class="img-container">
              <div class="counter">
                <p>{{ `${index + 1}` }}</p>
              </div>
              <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.title" width="150"
                class="z-3 img" @mouseover="showInfo(index)" @mouseout="hideInfo(index)" />
              <div v-if="infoVisible === index" class="info">
                <p>Título: {{ series.title }}</p>
                <p>Descrição: {{ series.overview }}</p>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
  <div class="info2">
    <div class="container-trailer">
      <p>sdas</p>
    </div>
    <div class="container-bot">
      <div class="container-icon">
        <i class="bi bi-play-fill"></i>
        <i class="bi bi-plus-circle"></i> 
        <i class="bi bi-heart-fill"></i>
      </div>
      <div class="container-info">
        <p class="text-green mt-3">96% relevante</p>
        <div class="display mt-3">
          <p class="idade">14</p>
          <p class="ml-2 temp">5 temporadas</p>
          <i class="bi bi-badge-hd-fill ml-2 icon-hd"></i>
        </div>
      </div>
      <div class="container-tv display mt-4">
        <p>Título</p>
        <p class="ml-2">Tipo:</p>
        <p class="ml-2">Genêro:</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container-bot{
  padding: 15px;
}
.textPrincipal {
  font-size: 36px;
  font-weight: bold;
}
.idade{
  background-color: orangered;
  border-radius: 4px;
  padding: 3px;
}

.display{
  display: flex;
}
.icon-hd
{
  margin-top: 2px;
}
.temp{
  font-size: 16px;
  margin-top: 2px;
}

.bi-play-fill {
  font-size: 32px;
  color: white;
}
.bi-heart-fill{
color: white;
margin-left: 5px;
font-size: 27px;

}

.bi-plus-circle {
  margin-left: 5px;
  font-size: 28px;
}

.container-top {
  margin-top: 5rem;
}

.container-card {
  margin-top: 1rem;
}

.img-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
}

.counter {
  position: relative;
  color: rgb(0, 0, 0);
  right: -55px;
  padding: 5px;
  font-weight: bold;
  font-size: 323.5px;
}

.img {
  border: 0.5px solid rgb(169, 169, 169);
}

.info {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(10px);
  display: none;
}

.info2 {
  background-color: black;
  color: white;
  width: 350px;
  height: 330px;
  border-radius: 4px;
}

.container-trailer {
  background-color: gray;
  height: 150px;
}

.img-container:hover .info {
  display: block;
}</style>
