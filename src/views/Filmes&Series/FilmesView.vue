<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios.js'
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';

const genres = ref([])

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})
</script>
<template>
    <header-principal/>
  <div>
    <h1>Filmes</h1>
  <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" class="genre-item">
        {{ genre.name }}
    </li>
  </ul>
  </div>
  <full-footer/>
</template>

<style scoped>
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