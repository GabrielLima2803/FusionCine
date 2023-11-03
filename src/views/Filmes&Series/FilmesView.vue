<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
import { useGenreStore } from '@/stores/genres'
import PreLoader from '@/components/loading/PreLoader.vue';
const showPreloader = ref(true); 


const genreStore = useGenreStore() 
const movieStore = useMovieStore()

onMounted(async () => {
  showPreloader.value = true
  await genreStore.getAllGenres('movie') 
  showPreloader.value = false
})

const listMovies = async (genreId) => {
  showPreloader.value = true
  await movieStore.getAllMovie(genreId)
  showPreloader.value = false
}
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
</script>

<template>
    <div>
    <header-principal />
    <div class="container">
      <ul class="genre-list">
        <li v-for="genre in genreStore.genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
          {{ genre.name }}
        </li>
      </ul>
      <PreLoader v-if="showPreloader" />
    </div>
    <div class="movie-list">
      <div v-for="movie in movieStore.movies" :key="movie.id" class="movie-card">
        <router-link :to="`/movie/${movie.id}`">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="150" />
        </router-link>
        <div class="movie-details">
          <p class="movie-title">{{ movie.title }}</p>
          <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
          <p class="movie-genres">
            <span v-for="genre_id in movie.genre_ids" :key="genre_id">
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

</style>