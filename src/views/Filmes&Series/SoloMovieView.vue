<script setup>
import { onMounted, ref } from 'vue';
import api from '@/plugins/axios'
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
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
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

</script>

<template>
    <header-principal />
    <div v-for="movie in movies" :key="movie.id">
        <div class="container-main">
            <div class="container-movie z-3">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="270"
                    class="img-movie" />
                <div class="info-movie">
                    <h1 class="title">{{ movie.title }}</h1>
                    <p class="movie-date">{{ formatDate(movie.release_date) }}</p>
    
                    <p>Avaliações de Usúario</p>
                    <h2 class="sinopse">Sinopse</h2>
                    <p>{{ movie.overview }}</p>
                    <div class="btn-alugar">
                        <button class="btn"> Alugar </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <full-footer />
</template>

<style scoped>
.container-main {
    max-width: 1420px;
    clear: both;
    margin: 0 auto
}

.container-movie {
    display: flex;
}

.title {
    font-weight: bold;
    font-size: 42px;
}

.img-movie {
    border-radius: 10px;
    margin-top: 4em;
}

.info-movie {
    padding: 15px;
    margin-top: 4.5em;

}

.sinopse {
    font-size: 25px;
    font-weight: bold;
}

.backdrop {
    filter: blur(1.5px);
}

.cont-backdrop {
    position: fixed;
    width: 100%;
    height: 600px;
    margin: 0;
}
</style>
