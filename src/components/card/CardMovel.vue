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
  <h1 id="Text-h1">Tendências</h1>
  <carousel :items-to-show="6.5" class="Margin">
    <slide v-for="movie in movies" :key="movie.id">
      <div class="movie-card">
        <div class="img-container">
          <img :src="getMoviePosterUrl(movie.poster_path)" alt="" width="200"  class="img" />
        </div>
        <div class="movie-title">
          <h6>{{ movie.title }}</h6>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<style scoped>
.Margin {
  margin-bottom: 80px;
}

#Text-h1 {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;
}
.img{
    border-radius: 10px;
    /* /* width: 100%; */
    /* height: 100%;  */
}
.movie-card {
  text-align: center;
  min-height: 0;
  height: auto;
}

h6 {
  font-weight: 700;
  margin-top: 20px;
}

.movie-card h6 {
  margin-top: 10px;
}
</style>
