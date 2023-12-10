<script setup>
import { useSearchStore } from '@/stores/search'
import BoxSearch from './BoxSearch.vue';
const searchStore = useSearchStore()
const next = async () => {
  await searchStore.nextPageMovie();
};

const prev = async () => {
  await searchStore.backPageMovie();
};
</script>

<template>
  <div class="container-max">
    <div class="box-total">
      <box-search/>
      <div v-for="item in searchStore.search" :key="item.id" class="card-one">
          <router-link :to="`/movie/${item.id}`" class="text-black text-deco">
        <div class="display">
          <img
            :src="
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : ('@/assets/img/spa.jpeg')
            "
            alt="Imagem do filme ou série"
            width="100"
            class="img"
          />
          <div class="text">
            <p class="title">{{ item.title }}</p>
            <p class="name">{{ item.name }}</p>
            <p class="date">Date</p>
            <p class="sinopse">{{ item.overview }}</p>
          </div>
        </div>
          </router-link>
      </div>
    </div>
    <div class="NextBack">
    <button @click="prev" :disabled="searchStore.currentPage <= 1" class="button prev">
      ← Anterior
    </button>
    {{ searchStore.currentPage }}
    <button @click="next" class="button next">
      Próxima →
    </button>
  </div>
  </div>
</template>

<style scoped>
.container-max {
  max-width: 1420px;
  margin: 0 auto;
}


.card-one {
  display: flex;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona sombra ao card */
  margin-top: 2rem;
  width: 100%;
  border-radius: 10px;
}

.display {
  display: flex;
  align-items: center;
}
.text-deco{
  text-decoration: none;
}
.text {
  margin-left: 1rem;
}
.NextBack {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button {
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.prev {
  margin-right: 10px;
}

.next {
  margin-left: 10px;
}

table {
  width: 18%;
  border-collapse: collapse;
  margin-top: 110px;
  border-radius: 10px 10px;
  border: solid 1px black;
}
.img {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

th,
td {
  padding: 10px;
  text-align: left;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
}
td:hover {
  background-color: rgb(219, 217, 217);
  transition: 0.2s;
}
.result {
  background-color: gray;
  color: white;
  padding: 1rem;
  font-size: 20px;
}
.title,
.name {
  font-size: 18px;
  font-weight: bold;
}
.sinopse {
  padding: 5px;

  margin-top: 1.7rem;
  font-size: 14px;
}
.date {
  font-size: 15px;
  color: gray;
}
</style>
