<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import { usePeopleStore } from '@/stores/people.js'
import { onMounted } from 'vue';
const peopleStore = usePeopleStore();

onMounted(async () => {
    await peopleStore.getAllPeople()
    await peopleStore.nextPage()
    await peopleStore.backPage()

})

</script>

<template>
    <header-principal />
    <div class="container-max">
        <div class="title">
            <h1 class="font">Pessoas Populares ({{ peopleStore.currentPage }})</h1>
        </div>
        <div class="container-people">
            <div v-for="people in peopleStore.peoples" :key="people.id" class="card">
                <div class="img">
                    <router-link :to="`/people/${people.id}`">
                        <img :src="`https://image.tmdb.org/t/p/w500${people.profile_path}`" :alt="`Imagem de ${people.name}`"
                        class="img-profile" />
                    </router-link>
                </div>
                <div class="info">
                    <p class="name">{{ people.name }}</p>
                    <p>{{ people.known_for.overview }}</p>
                </div>
            </div>
        </div>
        <div class="NextBack">
    <button @click="peopleStore.backPage" :disabled="peopleStore.currentPage <= 1" class="button prev">
      ← Anterior
    </button>
    <button @click="peopleStore.nextPage" class="button next">
      Próxima →
    </button>
  </div>
    </div>
    <full-footer />
</template>
  
  
<style scoped>
.container-max {
    max-width: 1420px;
    margin: 0 auto;
}

.title {
    margin-top: 130px;
    font-size: 25px;
    margin-bottom: 30px;
    font-weight: bold;
}

.container-people {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 30px;
}

.card {
    width: 300px;
    height: 350px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.container-people>div {
    text-align: center;
}

.img-profile {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container-people p {
    margin: 10px 0;
}

.name {
    text-align: start;
    font-weight: bold;
}

.img {
    cursor: pointer;    
    max-height: 300px;
}

.info {
    padding: 8px;
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
</style>
  