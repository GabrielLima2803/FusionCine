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
        <div class="backdrop">
            <div class="container-main">
                <div class="container-movie z-3">
                    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="300"
                        class="img-movie" />
                    <div class="info-movie">
                        <h1 class="title">{{ movie.title }}</h1>
                        <p class="movie-date mt-3 mb-3">{{ formatDate(movie.release_date) }}</p>

                        <div class="trailer">
                            <button> <i class="bi bi-play-fill text-aling"></i> Reproduzir trailer
                            </button>
                        </div>
                        <p class="mt-4">Avaliações de Usúario</p>
                        <p>{{ movie.vote_average }}</p>
                        <h2 class="sinopse mt-7 ">Sinopse</h2>
                        <p class="mt-3">{{ movie.overview }}</p>
                        <div class="btn-alugar">
                            <button class="btn"> Alugar </button>
                        </div>
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
.trailer
{
font-size: 22px;
font-weight: bold;
}

.img-movie {
    border-radius: 10px;
    margin-top: 3.5em;
    margin-bottom: 3.5em;
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
    background-color: #191F26;
    color: white;
}
</style>
