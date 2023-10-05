<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
const isLoading = ref(false);
const genres = ref([])

onMounted(async () => {
    const response = await api.get('genre/tv/list?language=pt-BR')
    genres.value = response.data.genres
})
const series = ref([]);
function getGenreName(id) {
  const genero = genres.value.find((genre) => genre.id === id);
  return genero.name;
}
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const listSeries = async (genreId) => {
    isLoading.value = true;
    const response = await api.get('discover/tv', {
        params: {
            with_genres: genreId,
            language: 'pt-BR'
        }
    });
    series.value = response.data.results
    isLoading.value = false;
};
</script>

<template>
    <header-principal />
    <div class="container">
        <div>
            <h1>Programas de TV</h1>
            <ul class="genre-list">
                <li v-for="genre in genres" :key="genre.id"  @click="listSeries(genre.id)" class="genre-item">
                    {{ genre.name }}
                </li>
            </ul>
            <loading v-model:active="isLoading" is-full-page />
        </div>
        <div class="series-list">
            <div v-for="series in series" :key="series.id" class="series-card">
                <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.title" width="150" />
                <div class="series-details">
                    <p class="series-title">{{ series.title }}</p>
                    <p class="series-release-date">{{ formatDate(series.release_date) }}</p>
                    <p class="series-genres">
                        <span v-for="genre_id in series.genre_ids" :key="genre_id">
                            {{ getGenreName(genre_id) }}
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