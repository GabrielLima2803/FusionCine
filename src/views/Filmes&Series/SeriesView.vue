<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import { ref, onMounted } from 'vue'
import { useGenreStore } from '@/stores/genres'
import { useTvStore } from '@/stores/tv.js';
import PreLoader from '@/components/loading/PreLoader.vue';
const showPreloader = ref(true);
const genreStore = useGenreStore()
const tvStore = useTvStore()


onMounted(async () => {
  showPreloader.value = true
  await genreStore.getAllGenres('tv')
  showPreloader.value = false
})
const listTv = async (genreId) => {
  showPreloader.value = true
  await tvStore.getAllTv(genreId)
  showPreloader.value = false
}

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const next = async () => {
  showPreloader.value = true;
  await tvStore.nextPage();
  showPreloader.value = false;
}
const prev = async () => {
  showPreloader.value = true;
  await tvStore.prevPage();
  showPreloader.value = false;
}
</script>

<template>
  <div>
    <header-principal />
    <div class="container">
      <PreLoader v-if="showPreloader" />
          <div class="container-page">
          <ul class="pagination mt-6">
            <li @click="prev" class="page-item mt-4 mr-4">Voltar Página</li>
            <li class="mt-4 li">{{ tvStore.currentPage }}</li>
            <li @click="next" class="page-item mt-4 ml-4">Próxima Página</li>
          </ul>
        </div>
    </div>
    <div class="img-container">
      <div class="series-list">
        <div v-for="series in tvStore.tvs" :key="series.id" class="series-card">
                <router-link :to="`/tv/${series.id}`">
                <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.name" width="150" />
          </router-link>
          <div class="series-details">
            <h2 class="series-title">{{ series.name }}</h2>
            <div class="selected-genre">
              <span> {{ formatDate(series.release_date) }} </span>
            </div>
          </div>
        </div>
        <v-card>
        <v-layout>
          <v-navigation-drawer expand-on-hover rail>
            <v-list density="compact" nav class="margin-top">
              <v-list-item prepend-icon="bi bi-film" v-for="genre in genreStore.genres" :key="genre.id" @click="listTv(genre.id)">
                <template #title>{{ genre.name }}</template>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main style="height: 250px"></v-main>
        </v-layout>
      </v-card>
      </div>
    </div>
  </div>
  <full-footer />
</template>
<style scoped>
.series-genres {
  padding: 0.2rem 0.5rem;
  color: #666;
  font-size: 0.8rem;
}
.margin-top{
  margin-top: 90px;
}
.li {
  list-style: none;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background-color: #f8f8f8;
  padding: 10px 12px;

  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.li:hover {
  background-color: #e0e0e0;
  transition: background-color 0.3s ease;
}
.NextBack {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.container-page {
  text-align: center;
}

.pagination {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-item {
  display: inline-block;
  margin: 0 5px;
  padding: 10px 12px;
  background-color: #000000;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.page-item:hover {
  background-color: #2b2929;
}
.button {
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.prev {
  margin-right: 10px;
}

.next {
  margin-left: 10px;
}

table
.navigation-drawer {
  margin-top: 80px;
}

.series-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
}

.img-container {
  margin-left: 150px;
  margin-top: 120px;
}

.series-card {
  max-width: 200px;
  text-align: center;
}

.series-card:hover {
  transform: scale(1.05); /* Ajuste o valor conforme necessário para a escala desejada */
  transition: transform 0.3s ease; /* Adicione uma transição suave */
}
.series-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.series-details {
  padding: 10px;
  text-align: left;
}

.series-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.series-release-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.series-genres span {
  background-color: #000000;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>

