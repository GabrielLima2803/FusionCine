<script setup>
import axios from 'axios'
import { ref } from 'vue'
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue'
import FullFooter from '@/components/footer/FullFooter.vue'
import CardBox from '@/components/card/CardBox.vue'

const movies = ref([])
const apiKey = '92a1cf3ee1f043920c17b8cff26b95e8'
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
const getMoviePosterUrl = (posterPath) => {
  if (posterPath) {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`
  }
  // Retorne uma imagem de fallback ou uma URL vazia se não houver um caminho de pôster.
  return 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg'
}

const fetchMovies = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data.results
  } catch (error) {
    console.error('Erro ao buscar a lista de filmes:', error)
    return []
  }
}

const loadMoreMovies = async () => {
  const nextPage = movies.value.length / 20 + 1 // Calcula a próxima página
  const apiUrlNextPage = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${nextPage}`
  const nextMovies = await fetchMovies(apiUrlNextPage)
  movies.value = [...movies.value, ...nextMovies]
}

// Carregue os filmes da primeira página inicialmente
;(async () => {
  const initialMovies = await fetchMovies(apiUrl)
  movies.value = initialMovies
})()

</script>
<template>
  <header-principal />
  <div id="Max">
    <h1>Lista de Filmes</h1>
    <ul class="displayImg">
      <li v-for="movie in movies" :key="movie.id" >
        <img :src="getMoviePosterUrl(movie.poster_path)" alt="" width="150"/>
      </li>
    </ul>
    <button @click="loadMoreMovies">Carregar mais filmes</button>
  <card-box/>
  </div>
  <full-footer />
</template>

<style scoped>
#Max{
    max-width: 1420px;
     clear: both;
    margin: 0 auto
}
</style>
