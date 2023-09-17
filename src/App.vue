<script setup>
import axios from 'axios'
import { ref } from 'vue'
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue'
import FullFooter from './components/footer/FullFooter.vue';

const movies = ref([])
const apiKey = '92a1cf3ee1f043920c17b8cff26b95e8'
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`

axios.get(apiUrl)
  .then((response) => {
    movies.value = response.data.results
  })
  .catch((error) => {
    console.error('Erro ao buscar a lista de filmes:', error)
  })

const getMoviePosterUrl = (posterPath) => {
  if (posterPath) {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`
  }
  // Retorne uma imagem de fallback ou uma URL vazia se não houver um caminho de pôster.
  return 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg'
}

</script>
<template>
  <header-principal />
  <div>
    <h1>Lista de Filmes</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
        <p>{{ movie.release_date }}</p>
        <img :src="getMoviePosterUrl(movie.poster_path)" alt="" width="150" />
      </li>
    </ul>
  </div>
  <full-footer/>
</template>

<style scoped></style>
