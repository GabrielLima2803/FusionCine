<script setup>
import { onMounted, ref } from 'vue';
import  api  from '@/plugins/axios'
const movies = ref([]); 
const props = defineProps({
  id: Number
});

onMounted(async () => {
  const movieDetails = await fetchMovieDetails(props.id);
  movies.value = [movieDetails]; 
});

const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(`movie/${id}`, {
      params: {
        language: 'pt-BR'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os detalhes do filme:', error);
    return {}; 
  }
};
</script>

<template>
  <div class="container-main">
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"  width="150"/>
    </div>
  </div>
</template>

<style scoped>
</style>
