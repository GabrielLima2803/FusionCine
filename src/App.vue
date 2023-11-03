<script setup>
import { ref, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie.js'
import { useTvStore } from '@/stores/tv.js'
import { useGenreStore } from '@/stores/genres.js'
import { useRouter } from 'vue-router';
import PreLoader from '@/components/loading/PreLoader.vue';
const router = useRouter();
const showPreloader = ref(true); 

const movieStore = useMovieStore();
const tvStore = useTvStore();
const genreStore = useGenreStore();

onMounted(async () => {
  await Promise.all([genreStore, movieStore, tvStore]);
  showPreloader.value = false;
});

router.beforeEach(() => {
  showPreloader.value = true;
});

router.afterEach(() => {
  setTimeout(() => {
    showPreloader.value = false;
  }, 500);
});
</script>
<template>
  <router-view />
  <PreLoader v-if="showPreloader" />
</template>

<style scoped>
</style>
