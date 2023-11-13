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
const formatYear = (date) => new Date(date).getFullYear(); 
</script>

<template>
  <div>
    <header-principal />
    <div class="container">
      <PreLoader v-if="showPreloader" />
    </div>
    <div class="img-container">
      <div class="movie-list">
        <div v-for="movie in movieStore.movies" :key="movie.id" class="movie-card">
          <router-link :to="`/movie/${movie.id}`">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="150" />
          </router-link>
          <div class="movie-details">
            <h2 class="movie-title">{{ movie.title }}</h2>
            <div class="selected-genre">
              <span v-if="selectedGenre">{{ genreStore.getGenreName(selectedGenre) }}</span>
              <span v-if="selectedGenre && movieStore.movies.length"> • </span>
              <span v-if="movieStore.movies.length">{{ formatYear(movieStore.movies[0].release_date) }}</span>
            </div>
          </div>
        </div>
        <v-card>
          <v-layout>
            <v-navigation-drawer expand-on-hover rail class="navigation-drawer">
              <v-list>
                <v-list-item prepend-icon="bi bi-person-circle" title="Sandra Adams"
                  subtitle="sandra_a88@gmailcom"></v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list density="compact" nav>
                <v-list-item prepend-icon="bi bi-film" v-for="genre in genreStore.genres" :key="genre.id"
                  @click="listMovies(genre.id)">
                  {{ genre.name }}</v-list-item>
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

.movie-genres {
  padding: 0.2rem 0.5rem;
  color: #666;
  font-size: 0.8rem;
}

.navigation-drawer {
  margin-top: 80px;

}

.movie-list {
  display: flex;
  justify-content: center;
  margin: 80px;
}

.img-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* Adjust as needed */
}

.movie-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.movie-details {
  padding: 10px;
  text-align: left;
}

.movie-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.movie-release-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.movie-genres span {
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