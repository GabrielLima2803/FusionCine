<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import Loading from 'vue-loading-overlay'
import { ref, onMounted } from 'vue'
import { useGenreStore } from '@/stores/genres'
import { useTvStore } from '@/stores/tv.js';


const genreStore = useGenreStore() 
const tvStore = useTvStore()

const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('tv') 
  isLoading.value = false
})
const listTv = async (genreId) => {
  isLoading.value = true
  await tvStore.getAllTv(genreId)
  isLoading.value = false
}

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

</script>

<template>
    <header-principal />
    <div class="container">
        <div>
            <h1>Programas de TV</h1>
            <ul class="genre-list">
                <li v-for="genre in genreStore.genres" :key="genre.id"  @click="listTv(genre.id)" class="genre-item">
                    {{ genre.name }}
                </li>
            </ul>
            <loading v-model:active="isLoading" is-full-page />
        </div>
        <div class="series-list">
            <div v-for="series in tvStore.tvs" :key="series.id" class="series-card">
                <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.title" width="150" />
                <div class="series-details">
                    <p class="series-title">{{ series.title }}</p>
                    <p class="series-release-date">{{ formatDate(series.release_date) }}</p>
                    <p class="series-genres">
                        <span v-for="genre_id in series.genre_ids" :key="genre_id">
                            {{ genreStore.getGenreName(genre_id) }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <full-footer />
</template>

<style scoped>
.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin-top: 80px;
}

.genre-item {
    background-color: #000000;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
}

.genre-item:hover {
    cursor: pointer;
    background-color: #e6e6e6;
    color: #000000;
    transition: .4s;
    box-shadow: 0 0 0.5rem #ffffff;
}
.series-genres span {
  background-color: #000000;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.series-genres span:hover {
  cursor: pointer;
  background-color: #8f8f8f;
  box-shadow: 0 0 0.5rem #3a3a3a;
}

</style>