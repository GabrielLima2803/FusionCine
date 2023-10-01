<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios.js'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const movies = ref([]);

onMounted(async () => {
  const response = await api.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc`)
  movies.value = response.data.results;
})

const getMoviePosterUrl = (posterPath) => {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500/${posterPath}`
    }
    // Retorne uma imagem de fallback.
    return 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg'
  }

  
</script>

<template>
    <carousel :items-to-show="5">
        <slide v-for="movie in movies" :key="movie.id">
            <img :src="getMoviePosterUrl(movie.poster_path)" alt="" width="150"/>
        </slide>
        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>
  

  
<style scoped></style>
  