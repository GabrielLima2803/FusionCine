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
            <div class="img-container" @mouseover="showInfo(index)" @mouseout="hideInfo(index)">
              <div class="counter">
                <p>{{ `${index + 1}` }}</p>
              </div>
              <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.title" width="150" class="z-3 img" />
              <div v-if="infoVisible === index" class="info">
                <!-- Conteúdo das informações adicionais -->
                <p>Título: {{ series.title }}</p>
                <p>Descrição: {{ series.overview }}</p>
                <!-- Adicione outras informações que desejar -->
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
</template>

<style scoped>
.textPrincipal {
  font-size: 36px;
  font-weight: bold;
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
.img
{
  border: 0.5px solid rgb(169, 169, 169); /* Adicione uma borda cinza em volta da imagem */
}
.info {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 100%; /* Coloca à direita da imagem */
  transform: translateX(10px); /* Adiciona um pequeno espaço entre a imagem e as informações */
  display: none;
}

.img-container:hover .info {
  display: block; /* Exibe as informações quando o mouse passa por cima do .img-container */
}
</style>
