<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { onMounted, computed } from 'vue';
import { useMovieStore } from '@/stores/movie';

const movieStore = useMovieStore()

onMounted(async () => {
  await movieStore.getAllMovie()
})

const first9Movies = computed(() => movieStore.movies.slice(0, 9))

</script>

<template>
  <div class="container-top">
    <h1 class="textPrincipal">Brasil: Top 10 em filmes hoje</h1>
    <div class="container-card">
      <carousel :items-to-show="2.8" class="Margin">
        <slide v-for="(movie, index) in first9Movies" :key="movie.id">
          <router-link class="underline" :to="`/movie/${movie.id}`">
            <div class="img-card">
              <div class="img-container">
                <div class="counter">
                  <p>{{ `${index + 1}` }}</p>
                </div>
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"  :alt="movie.title" width="165"
                class="z-3 img" @mouseover="showInfo(index)" @mouseout="hideInfo(index)" />

              </div>
            </div>
          </router-link>
          </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped>
.container-bot {
  padding: 15px;
}
.underline{
  text-decoration: none;
}
.img:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
.text-aling{
  text-align: start;
}
.textPrincipal {
  font-size: 36px;
  font-weight: bold;
}

.idade {
  background-color: orangered;
  border-radius: 4px;
  padding: 3px;
}

.display {
  display: flex;
}

.icon-hd {
  margin-top: 2px;
}

.temp {
  font-size: 16px;
  margin-top: 2px;
}

.bi-play-fill {
  font-size: 32px;
  color: white;
}

.bi-heart-fill {
  color: white;
  margin-left: 5px;
  font-size: 27px;

}

.bi-plus-circle {
  margin-left: 5px;
  font-size: 28px;
}

.container-top {
  margin-top: 5rem;
}

.container-card {
  margin-top: 1rem;
}

.img-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
}

.counter {
  position: relative;
  color: rgb(0, 0, 0);
  right: -20px;
  padding: 5px;
  top: 11px;
  font-weight: bold;
  font-size: 323.5px;
  letter-spacing: -40px;
}

.img {
  border: 0.5px solid rgb(169, 169, 169);
}

.info {
  background-color: black;
  color: white;
  border-radius: 4px;
  position: fixed;
  transform: translateX(10px);
  display: none;
  left: 115px;
  width: 350px;
  height: 330px;
  z-index: 99;
  border-radius: 4px;
  transition: opacity 0.3s ease-in-out; /* Adicione esta linha */

}

.info2 {
  background-color: black;
  color: white;
  width: 350px;
  height: 330px;
  border-radius: 4px;
}

.container-trailer {
  background-color: gray;
  height: 150px;
}

.img-container:hover .info {
  display: block;
  opacity: 1;
}



</style>
