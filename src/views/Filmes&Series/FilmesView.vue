<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios.js'
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
// import PreLoader from '../../components/loading/PreLoader.vue';
// import {isLoading} from '../../components/loading/PreLoader.vue';
const genres = ref([])

function getGenreName(id) {
  const genero = genres.value.find((genre) => genre.id === id);
  return genero.name;
}
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})

const movies = ref([]);

const listMovies = async (genreId) => {
  // isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  movies.value = response.data.results
};
</script>
<template>
  <header-principal />
  <div>
    <h1>Filmes</h1>
    <ul class="genre-list">
      <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
        {{ genre.name }}
      </li>
    </ul>
    <!-- <pre-loader v-model:active="isLoading" is-full-page /> -->
  </div>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-card">

      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="150" />
      <div class="movie-details">
        <p class="movie-title">{{ movie.title }}</p>
        <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
        <p class="movie-genres"> 
          <span v-for="genre_id in movie.genre_ids" :key="genre_id" >
            {{ getGenreName(genre_id) }}
          </span></p>
      </div>
    </div>
  </div>
  <full-footer />
</template>

<style scoped>
.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: #000000;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #8f8f8f;
  box-shadow: 0 0 0.5rem #3a3a3a;
}
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
  color: #fff;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #696969;
  box-shadow: 0 0 0.5rem #696969;
  color: rgb(255, 255, 255);
  transition: .4s;
}
</style>