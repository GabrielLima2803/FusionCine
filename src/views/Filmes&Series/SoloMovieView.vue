<script setup>
import { onMounted, ref } from 'vue';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from '@/plugins/axios';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
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
      <div class="backdrop" :style="{
        'background-image': `linear-gradient(to right, rgb(16, 14, 14) 150px, rgba(16, 14, 14, 0.84) 100%),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }">
        <div class="container-main">
          <div class="container-movie z-3">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="350"
              class="img-movie" />
            <div class="info-movie">
              <h1 class="title">{{ movie.title }}</h1>
            </div>
          </div>
          <div class="trailer mt-5">
            <button @click="openTrailer(movie.videos && movie.videos.results)">
              <i class="bi bi-play"></i> Reproduzir trailer
            </button>
          </div>
          <div class="btn-alugar mt-6 info-opc">
            <i class="bi bi-heart"></i>
            <button class="ml-3"> Alugar </button>
          </div>
          <div class="avi mt-6 d-flex info-opc margin-b">
            <i class="bi bi-star-fill "></i>
            <p class="ml-4 "> {{ movie.vote_average }}</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container-main d-flex flex-wrap">
      <!-- Elenco -->
      <div>
        <div class="panel">
          <h2 class="mb-4 font-weight-bold text-center text-md-left mt-4 title-member">Elenco Principal</h2>
          <div class="d-flex flex-wrap">
  <div v-for="(castMember) in movie.credits.cast.slice(0, showMoreCast ? undefined : maxVisibleCastMembers)"
    :key="castMember.id" class="m-3 wid-card">
    <div class="card-container">
      <router-link :to="`/people/${castMember.id}`" class="reset">
        <div class="circle">
          <img v-if="castMember.profile_path" :src="`https://image.tmdb.org/t/p/w500${castMember.profile_path}`"
          class="cast-member-image mask full mx-auto" />
          <img v-else src="@/assets/img/fallback.jpg" alt="Fallback Image" class="cast-member-image mask full" />
        </div>
        <div class="card-details">
          <p class="name-member">{{ castMember.name }}</p>
          <p class="char">{{ castMember.character }}</p>
        </div>
      </router-link>
    </div>
  </div>
</div>
<div class="text-center">
  <button class="btn-show-cast btn-lg d-flex justify-content-center align-items-center" @click="toggleShowMore">
    <i v-if="showMoreCast" class="bi bi-arrow-bar-up"></i>
    <i v-else class="bi bi-arrow-bar-down"></i>
  </button>
</div>
        </div>
      </div>
    </div>
    <!-- Informações -->
    <div class="info-gener">
      <div class="col-lg-4 col-md-4 col-12">
        <div class="info text-center text-md-left m-20">
          <h2 class="sinopse mt-4">Sinopse</h2>
          <div class="info-sobre">
            <h5 class="title">{{ movie.title }}</h5>
            <h6 class="mt-3"> {{ getGenreNames(movie.genres) }}</h6>
            <div class="sinop">
              <p class="mt-3">{{ movie.overview }}</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="info-item p-20">
          <h1 class="m-20">Título original</h1>
          <h6 class="mt-4 ml-5">{{ movie.original_title }}</h6>
        </div>
      </div>
      <!-- Adicione estas classes à div .informacoes -->
      <div class="informacoes">
        <div class="info-col">
          <div class="info-item">
            <h2>Sobre o filme</h2>
          </div>
          <div class="info-item">
            <h6>Lançamento</h6>
            <p class="movie-date mt-1">{{ formatDate(movie.release_date) }}</p>
          </div>
          <div class="info-item">
            <h6>Duração</h6>
            <p class="mt-1">{{ getFormattedRuntime(movie.runtime) }}</p>
          </div>
          <div class="info-item">
            <h6>Genêro</h6>
            <p class="mt-1">{{ getGenreNames(movie.genres) }}</p>
          </div>
        </div>

        <div class="info-col">
          <div class="info-item">
            <h2>Informações</h2>
          </div>
          <div class="info-item">
            <h6>Situação</h6>
            <p class="mt-1">{{ movie.status }}</p>
          </div>
          <div class="info-item">
            <h6>Orçamento</h6>
            <p class="mt-1">${{ movie.budget }}</p>
          </div>
          <div class="info-item">
            <h6>Receita</h6>
            <p class="mt-1">${{ movie.revenue }}</p>
          </div>
        </div>

        <div class="info-col">
          <div class="info-item">
            <h2>Palavras-chave</h2>
          </div>
          <div class="keyword-grid">
            <div v-for="(keyword, index) in getKeywordsNames(movie.keywords)" :key="index" class="keyword-item">
              <p class="keyword-tag">{{ keyword }}</p>
            </div>
          </div>
        </div>
      </div>
      <full-footer />
    </div>
  </div>
</template>

<style scoped>
.container-main {
  max-width: 1400px;
  clear: both;
  margin: 0 auto;
}
.reset{
  color: black;
  text-decoration: none;
}

.info-opc {
  font-size: 18px;
  color: black;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
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
  font-size: 18px;
  color: black;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}

hr {
  width: 95%;
  margin: 20px;
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

.avi {
  font-size: 20px;
}
.backdrop {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 440px;
}

.half {
  transform: rotate(180deg);
}

.fill {
  background-color: #f8cc1d;
  clip: rect(0, 100px, 100px, 50px);
}

.cast-member-image {
  max-width: 100%;
}

.mask {
  clip: rect(0, 100px, 100px, 0);
  position: absolute;
}

.full {
  transform: rotate(0deg);
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-details {
  text-align: center;
  margin-top: 10px;
}

.name-member {
  font-size: 15px;
  margin-bottom: 5px;
}

.char {
  color: gray;
  font-size: 12px;
}

.circle {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.circle:hover {
  border: 2px solid rgba(0, 0, 0, 0.797);
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
.sinopse {
  font-size: 25px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
  padding-top: 30px;
  padding-bottom: 5px;
  padding-left: 20px;
}

.informacoes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  margin: 20px;
}

.info-col {
  width: 50%;
  align-items: center;
}


.info-gener {
  background-color: #bfbfbf3c;
}

.info-sobre {
  border: 1px solid rgba(0, 0, 0, .125);
  padding: 14px 16px;
  border-radius: 12px;
  background-color: #fff;
  color: #9b9a9a;
  margin: 20px;
}

.info-sobre>h5 {
  color: black;
  font-size: 20px;
}

.info-sobre>h6 {
  color: rgba(160, 160, 160, 0.879);
  font-size: 10px;
}

.info-item>h1 {
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
}

.info-item {
  margin: 10px;
}

.info-item>p {
  font-size: 11px;
  margin: 20px;
  color: #666;
}

.info-item>h6 {
  font-size: 13px;
  margin-left: 5px;
  color: black;
}

.card-body {
  padding: 10px;
  flex: 1 1 auto;
  min-height: 1px;
}

.keyword-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.keyword-item {
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
}

.keyword-tag {
  font-size: 12px;
  margin: 0;
  color: #333;
}

</style>
