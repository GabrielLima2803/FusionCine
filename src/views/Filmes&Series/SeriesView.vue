<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
const genres = ref([])

onMounted(async () => {
    const response = await api.get('genre/tv/list?language=pt-BR')
    genres.value = response.data.genres
})
</script>

<template>
    <header-principal />
    <div class="container">
        <div>
            <h1>Programas de TV</h1>
            <ul class="genre-list">
                <li v-for="genre in genres" :key="genre.id" class="genre-item">
                    {{ genre.name }}
                </li>
            </ul>
            <h2>Filmes por Gênero</h2>
        </div>
    </div>
    <full-footer />
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
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
}

.genre-item:hover {
    cursor: pointer;
    background-color: #e6e6e6;
    color: #000000;
    transition: .4s;
    box-shadow: 0 0 0.5rem #ffffff;
}
</style>