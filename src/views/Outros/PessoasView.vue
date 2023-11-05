<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import { usePeopleStore } from '@/stores/people.js'
import { onMounted, ref } from 'vue';
import PreLoader from '@/components/loading/PreLoader.vue';
const showPreloader = ref(true); 
const peopleStore = usePeopleStore();

onMounted(async () => {
    await peopleStore.getAllPeople()
    showPreloader.value = true
    await peopleStore.nextPage()
    showPreloader.value = false
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
                    <img :src="`https://image.tmdb.org/t/p/w500${people.profile_path}`" :alt="`Imagem de ${people.name}`"
                        class="img-profile" />
                </div>
                <div class="info">
                    <p class="name">{{ people.name }}</p>
                    <p>{{ people.known_for.overview }}</p>
                </div>
            </div>
        </div>

        <div class="NextBack">
            <button @click="peopleStore.backPage" :disabled="peopleStore.currentPage <= 1" class="mr-3"> ← Anterior</button>
            <button @click="peopleStore.nextPage">Próxima →</button>
        </div>
    </div>
        <PreLoader v-if="showPreloader" />
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
    cursor: pointer;
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
    max-height: 300px;
}

.info {
    padding: 8px;
}

.NextBack {
    text-align: center;
    margin-top: 50px;
    margin-bottom: -50px;
}</style>
  