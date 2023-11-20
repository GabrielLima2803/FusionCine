<script setup>
import { onMounted, ref } from 'vue';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from '@/plugins/axios';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
import CardPop from '@/components/card/CardPop.vue';
const tvs = ref([]);
const props = defineProps({
    id: Number
});

const showMoreCast = ref(false);
const maxVisibleCastMembers = 8;


onMounted(async () => {
    const tvDetails = await fetchtvDetails(props.id);
    tvs.value = [tvDetails];
});

const fetchtvDetails = async (id) => {
    try {
        const response = await api.get(`tv/${id}?language=pt-BR&append_to_response=credits,videos,keywords`, {
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
    return keywords.results.map(keyword => keyword.name);
};
const getNameOringinal = () => {
    
}
</script>

<template>
    <header-principal />
    <div v-for="tv in tvs" :key="tv.id">
        <div class="backdrop">
            <div class="backdrop"
                :style="{ 'background-image': `linear-gradient(to right, rgb(16, 14, 14) 150px, rgba(16, 14, 14, 0.84) 100%),url(https://image.tmdb.org/t/p/original${tv.backdrop_path})` }">
                <div class="container-main">
                    <div class="container-tv z-3">
                        <img :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`" :alt="tv.title" width="350"
                            class="img-tv" />
                        <div class="info-tv">
                            <h1 class="title">{{ tv.name }}</h1>
                            <div class="container-so">
                                <p class="tv-date mt-3 mb-3">{{  }} </p>
                                <p class="mt-3 ml-3"> • {{ getGenreNames(tv.genres) }} </p>
                                <!-- <p class="mt-3 ml-3"> • {{ tv.runtime }}</p> -->
                            </div>
                            <div class="trailer mt-5">
                                <button @click="openTrailer(tv.videos && tv.videos.results)">
                                    <i class="bi bi-play-fill text-aling"></i> Reproduzir trailer
                                </button>
                            </div>
                            <div class="avi mt-6 d-flex">
                                <i class="bi bi-star-fill"></i>
                                <p class="ml-4"> {{ tv.vote_average }}
                                </p>
                            </div>
                            <h2 class="sinopse mt-7 ">Sinopse</h2>
                            <p class="mt-3">{{ tv.overview }}</p>
                            <div class="btn-alugar mt-6 info-opc">
                                <i class="bi bi-heart-fill"></i>
                                <button class="ml-3 btn-1">Alugar</button>
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
                        <div v-for="(castMember) in tv.credits.crew.slice(0, showMoreCast ? undefined : maxVisibleCastMembers)"
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
                            {{ tv.original_name }}
                        </p>
                    </div>
                    <div class="info-item ">
                        <h1>Situação</h1>
                        <p class="mt-4">
                            {{ tv.status }}
                        </p>
                    </div>
                    <div class="info-item ">
                        <h1>Emissora</h1>
                        <p class="mt-4">
                            ${{  }}
                        </p>
                    </div>
                    <div class="info-item ">
                        <h1>Idiama Original</h1>
                        <p class="mt-4">
                            {{ tv.languages }}
                        </p>
                    </div>
                    <div class="info-item">
                        <h1>Palavras-chave</h1>
                        <div v-for="(keyword, index) in getKeywordsNames(tv.keywords)" :key="index"
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

.button-alg{
    background-color: #666;
    padding: 10px;
    border-radius: 10px;
}
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
.btn-1{
        background-color: #fff;
        padding: 0.4em 1em;
        border-radius: 20em;
        border: none;
        user-select: none;
        cursor: pointer;
        font-size: 20px;
        transition: all 100ms linear;
        color: #000000;
        position: relative;
        box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.1), 
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    .btn-1:active {
        box-shadow: inset 0 0 0 4px #043b3f6b;
    }

    .btn-1::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        border-radius: inherit;
        z-index: -1;
        top: 0;
        left: 0;
        transition: all 500ms ease-in-out;
        opacity: 0;
        animation: flash 100ms ease-in-out;
        transform: scaleX(2) scaleY(2);
    }

    .btn-1:hover::before {
        opacity: 1;
        transform: scaleX(1) scaleY(1);
    }

    @keyframes flash {
        0%{
            opacity: 1;
            transform: translate(45px);
        }
        100%{
            opacity: 0;
            transform: translate(0);
        }
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

.container-tv {
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

.img-tv {
    border-radius: 10px;
    margin-top: 3.5em;
    margin-bottom: 3.5em;
}

.info-tv {
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
