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

</script>

<template>
  <div>
    <header-principal />
    <div class="container">
      <PreLoader v-if="showPreloader" />
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
            <v-list density="compact" nav>
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

