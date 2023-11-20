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
    <header-principal />
    <div class="container">
        <div>
            <h1>Programas de TV</h1>
            <ul class="genre-list">
                <li v-for="genre in genreStore.genres" :key="genre.id"  @click="listTv(genre.id)" class="genre-item">
                    {{ genre.name }}
                </li>
            </ul>
            <PreLoader v-if="showPreloader" />
        </div>
        <div class="series-list">
            <div v-for="series in tvStore.tvs" :key="series.id" class="series-card">
                <router-link :to="`/tv/${series.id}`">
                <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.name" width="150" />
                <div class="series-details">
                    <p class="series-title">{{ series.name }}</p>
                    <p class="series-release-date">{{ formatDate(series.release_date) }}</p>
                    <p class="series-genres">
                        <span v-for="genre_id in series.genre_ids" :key="genre_id">
                            {{ genreStore.getGenreName(genre_id) }}
                        </span>
                    </p>
                </div>
                </router-link>
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
    margin-top: 81px;
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