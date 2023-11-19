<script setup>
import { onMounted, ref } from 'vue';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from '@/plugins/axios';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import CardPop from '@/components/card/CardPop.vue';
const movies = ref([]);
const props = defineProps({
    id: Number
});
const showMoreCast = ref(false);
const maxVisibleCastMembers = 8;


onMounted(async () => {
    const movieDetails = await fetchMovieDetails(props.id);
    movies.value = [movieDetails];
});

const fetchMovieDetails = async (id) => {
    try {
        const response = await api.get(`movie/${id}?language=pt-BR&append_to_response=credits,videos,keywords`, {
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os detalhes do filme:', error);
        return {};
    }
};

const formatDate = (date) => {
    const formattedDate = format(new Date(date), 'dd MMMM yyyy', { locale: ptBR });
    return formattedDate.replace(/ /g, ' de ');
};

const getFormattedRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
};

const getGenreNames = (genres) => {
    return genres.map(genre => genre.name).join(', ');
};
const openTrailer = (videos) => {
    if (videos && videos.length > 0) {
        const trailerId = videos[0].key;
        const trailerUrl = `https://www.youtube.com/watch?v=${trailerId}`;
        window.open(trailerUrl, '_blank');
    } else {
        console.warn('Nenhum vídeo de trailer disponível.');
    }
    console.log('Abrir trailer:', videos);
};


const toggleShowMore = () => {
    showMoreCast.value = !showMoreCast.value;
};
const getKeywordsNames = (keywords) => {
    return keywords.keywords.map(keyword => keyword.name);
};

</script>

<template>
    <header-principal />
    <div v-for="movie in movies" :key="movie.id">
        <div class="backdrop">
            <div class="backdrop"
                :style="{ 'background-image': `linear-gradient(to right, rgb(16, 14, 14) 150px, rgba(16, 14, 14, 0.84) 100%),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }">
                <div class="container-main">
                    <div class="container-movie z-3">
                        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="350"
                            class="img-movie" />
                        <div class="info-movie">
                            <h1 class="title">{{ movie.title }}</h1>
                            <div class="container-so">
                                <p class="movie-date mt-3 mb-3">{{ formatDate(movie.release_date) }} </p>
                                <p class="mt-3 ml-3"> • {{ getFormattedRuntime(movie.runtime) }} </p>
                                <p class="mt-3 ml-3"> • {{ getGenreNames(movie.genres) }}</p>
                            </div>
                            <div class="trailer mt-5">
                                <button @click="openTrailer(movie.videos && movie.videos.results)">
                                    <i class="bi bi-play-fill text-aling"></i> Reproduzir trailer
                                </button>
                            </div>
                            <div class="avi mt-6 d-flex">
                                <i class="bi bi-star-fill"></i>
                                <p class="ml-4"> {{ movie.vote_average }}
                                </p>
                            </div>
                            <h2 class="sinopse mt-7 ">Sinopse</h2>
                            <p class="mt-3">{{ movie.overview }}</p>
                            <div class="btn-alugar mt-6 info-opc">
                                <i class="bi bi-heart-fill"></i>
                                <button class="ml-3"> Alugar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Aprendendo a usar o bootstrap :) -->
        <div class="container-main d-flex flex-wrap">
            <div class="col-lg-8 col-md-8 col-12">
                <div class="panel">
                    <h1 class="mb-4 font-weight-bold text-center text-md-left mt-4 title-member">Elenco Principal</h1>
                    <div class="d-flex flex-wrap">
                        <div v-for="(castMember) in movie.credits.cast.slice(0, showMoreCast ? undefined : maxVisibleCastMembers)"
                            :key="castMember.id" class="mb-3 col-lg-3 col-sm-4 col-6 wid-card">
                            <div class="h-100 card">
                                <img :src="`https://image.tmdb.org/t/p/w500${castMember.profile_path}`" />
                                <div class="card-body">
                                    <h2 class="name-member">{{ castMember.name }}</h2>
                                    <p class="mt-1 char">{{ castMember.character }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn-show-cast btn-lg" @click="toggleShowMore">
                            {{ showMoreCast ? 'ver menos' : 'ver mais' }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="info text-center  text-md-left">
                    <div class="social d-flex mt-4 title-member">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter ml-5"></i>
                        <i class="bi bi-facebook ml-5"></i>
                    </div>
                    <div class="info-item ">
                        <h1>Título original</h1>
                        <p class="mt-4">
                            {{ movie.original_title }}
                        </p>
                    </div>
                    <div class="info-item ">
                        <h1>Situação</h1>
                        <p class="mt-4">
                            {{ movie.status }}
                        </p>
                    </div>
                    <div class="info-item ">
                        <h1>Orçamento</h1>
                        <p class="mt-4">
                            ${{ movie.budget }}
                        </p>
                    </div>
                    <div class="info-item ">
                        <h1>Receita</h1>
                        <p class="mt-4">
                            ${{ movie.revenue }}
                        </p>
                    </div>
                    <div class="info-item">
                        <h1>Palavras-chave</h1>
                        <div v-for="(keyword, index) in getKeywordsNames(movie.keywords)" :key="index"
                            class="d-flex mt-2 flex-wrap justify-content-center justify-content-md-start">
                            <p class="keyword-tag">
                                {{ keyword }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <card-pop />
        </div>
    </div>
    <full-footer />
</template>

<style scoped>
.container-main {
    max-width: 1400px;
    clear: both;
    margin: 0 auto;
}
.info-opc{
font-size: 20px;
}
.keyword-tag {
    background-color: #ddd;
    color: #666;
    padding: 4px 8px;
    border-radius: 6px;
    margin-right: 10px;
    font-size: 18px;
}

.info-item>h1 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
}

.info-item>p {
    font-size: 21px;
    margin-left: 5px;
}

.card {
    position: relative;
    display: flex;
    width: 160px;
    flex-direction: column;
    cursor: pointer;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    margin-left: 0.5rem;
    border-radius: 0.5rem;
}

.card-body {
    padding: 10px;
    flex: 1 1 auto;
    min-height: 1px;
}

.char {
    color: gray;
    font-size: 12px;
}

.title-member {
    font-size: 30px;
}

.name-member {
    font-size: 15px;
}

.container-so {
    display: flex;
    font-size: 18px;
    font-weight: bold;
}

.container-movie {
    display: flex;
    color: white;

}

.title {
    font-weight: bold;
    font-size: 42px;
}

.trailer {
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
.avi{
    font-size: 20px;
}
.sinopse {
    font-size: 25px;
    font-weight: bold;
}

.backdrop {
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 440px;
}

.circle {
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 50%;
    position: relative;
}

.mask {
    clip: rect(0, 50px, 100px, 0);
    position: absolute;
}

.full {
    transform: rotate(0deg);
}

.half {
    transform: rotate(180deg);
}

.fill {
    background-color: #f8cc1d;
    clip: rect(0, 100px, 100px, 50px);
}

.inside-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: bold;
    color: #fff;
}
</style>
