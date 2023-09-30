<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue'
import FullFooter from '@/components/footer/FullFooter.vue'
import CardBox from '@/components/card/CardBox.vue'
import CardMovel from '@/components/card/CardMovel.vue'


const movies = ref([]);
const tvs = ref([]);
const currentPage = ref(1);
const apiKey = '92a1cf3ee1f043920c17b8cff26b95e8';

// const movies = ref([])

// Filmes e Séries

onMounted(async () => {
    try {
      let movieResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmExY2YzZWUxZjA0MzkyMGMxN2I4Y2ZmMjZiOTVlOCIsInN1YiI6IjY0ZmYxNTcxMmRmZmQ4MDBhZGI2ZjlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9mkPip-VR_aTvrIw61NobRPhAcfE1KiG-yzIfX6COaM'
        }
      });
      movies.value = movieResponse.data.results;
      let tvResponse = await axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=true&language=pt-BR&page=1&sort_by=popularity.desc', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmExY2YzZWUxZjA0MzkyMGMxN2I4Y2ZmMjZiOTVlOCIsInN1YiI6IjY0ZmYxNTcxMmRmZmQ4MDBhZGI2ZjlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9mkPip-VR_aTvrIw61NobRPhAcfE1KiG-yzIfX6COaM'
        }
      });
  
      
      tvs.value = tvResponse.data.results;
    } catch (error) {
      console.error('Erro ao buscar os dados da API:', error);
    }
  });

  const loadMoreMovies = async () => {
  currentPage.value++; 
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=pt-BR&page=${currentPage.value}&sort_by=popularity.desc`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    // Use o operador spread (...) para concatenar os novos resultados à lista existente de filmes
    movies.value = [...movies.value, ...response.data.results];
  } catch (error) {
    console.error('Erro ao buscar mais filmes da API:', error);
  }
}
  const getMoviePosterUrl = (posterPath) => {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500/${posterPath}`
    }
    // Retorne uma imagem de fallback.
    return 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg'
  }

// Carregar as Imagem dos Poster

</script>
<template>
  <header-principal />
  <div id="Max">
  <ul>
    <h1>Filmes</h1>
    <li v-for="movie in movies" :key="movie.id">
      {{ movie.title }}
      <br>
      <img :src="getMoviePosterUrl(movie.poster_path)" alt="" width="150"/>
    </li>
    <button @click="loadMoreMovies">Carregar Mais Filmes</button>
  </ul>
  <hr>
  <card-movel/>
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
