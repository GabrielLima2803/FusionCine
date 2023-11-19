import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    movies: [],
    showMoreCast: false, 
  });

  const movies = computed(() => state.movies);

  const getAllMovie = async (genreId) => {
    try {
      const response = await api.get(`discover/movie`, {
        params: {
          with_genres: genreId,
          language: 'pt-BR',
        },
      });
      state.movies = response.data.results;
    } catch (error) {
      console.error('Erro ao buscar os filmes:', error);
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
    return genres.map((genre) => genre.name).join(', ');
  };

  const openTrailer = (videos) => {
    if (videos && videos.length > 0) {
      const trailerId = videos[0].key;
      const trailerUrl = `https://www.youtube.com/watch?v=${trailerId}`;
      window.open(trailerUrl, '_blank');
    } else {
      console.warn('Nenhum vídeo de trailer disponível.');
    }
  };

  const toggleShowMore = () => {
    state.showMoreCast = !state.showMoreCast;
  };

  const getKeywordsNames = (keywords) => {
    return keywords.keywords.map((keyword) => keyword.name);
  };

  return {
    movies,
    getAllMovie,
    formatDate,
    getFormattedRuntime,
    getGenreNames,
    openTrailer,
    toggleShowMore,
    getKeywordsNames,
  };
});
