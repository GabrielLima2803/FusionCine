<script setup>
import { onMounted } from 'vue';
import { useTvStore } from '@/stores/tv';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const tvStore = useTvStore();

onMounted(async () => {
    await tvStore.getAllTv();
});
const formatDate = (date) => {
    const formattedDate = format(new Date(date), 'dd MMMM yyyy', { locale: ptBR });
    return formattedDate.replace(/ /g, ' de ');
};
</script>

<template>
    <div class="card-pop">
        <h1>Recomendações</h1>
        <div class="container-card mt-4">
            <div v-for="(series, index) in tvStore.tvs.slice(0, 10)" :key="index" class="tv-card">
                <router-link :to="`/tv/${series.id}`" class="router-link">
                <div class="card h-100">              
                <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" :alt="series.name" width="250" />
                <div class="info">
                <p class="tv-title">{{ series.name }}</p>
                <p class="tv-date mt-3 mb-3">{{ formatDate(series.release_date) }} </p>
                </div>
                </div>
                    </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.router-link{
    text-decoration: none;
}
h1{
    font-size: 30px;
    font-weight: bold;
    margin-left: 8px;
}
.container-card {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    justify-content: space-around;
}
.card-pop{
    margin-top: 100px;
}
.info{
    padding: 10px;
}
.card {
    position: relative;
    display: flex;
    width: 250px;
    flex-direction: column;
    cursor: pointer;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.5rem;
}

.tv-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.tv-title {
    font-size: 18px;
    margin-top: 8px;
    text-decoration: none;
    
}

.tv-date {
    font-size: 14px;
    color: gray;
    margin-top: 4px;
}
</style>
