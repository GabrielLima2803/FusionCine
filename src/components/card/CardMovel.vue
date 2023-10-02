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
      <h1 id="Text-h1">Tendêcias</h1>
    <carousel :items-to-show="7.5" class="Margin">
        <slide v-for="movie in movies" :key="movie.id">
            <img :src="getMoviePosterUrl(movie.poster_path)" alt="" width="150" class="img"/>
        </slide>
        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>
  

  
<style scoped>
.Margin{
  margin-bottom: 80px;
}
#Text-h1{
  text-align: center;
   margin-top: 80px;
   margin-bottom: 20px;
}
.img{
  border-radius: 10px 10px;
}
</style>
  