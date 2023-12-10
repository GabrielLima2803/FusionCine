import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    movies: [],
    showMoreCast: false, 
    currentPage: 1,
    totalPages: 0,
    selectedGenreId: null, // Add this line
  });


  const movies = computed(() => state.movies);
  const currentPage = computed(() => state.currentPage);

  const getAllMovie = async (page = 1) => {
    try {
      const params = {
        language: 'pt-BR',
        page: page,
        with_genres: state.selectedGenreId, 
        primary_release_year: state.selectedYear,
      };
  
      const response = await api.get('discover/movie', { params });
      state.movies = response.data.results;
      state.totalPages = response.data.total_pages;
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

  const getMoviesByPage = (page) => {
    state.currentPage = page;
    getAllMovie(null, page);
  };

  const nextPage = () => {
    if (state.currentPage < state.totalPages) {
      getMoviesByPage(state.currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (state.currentPage > 1) {
      getMoviesByPage(state.currentPage - 1);
    }
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
    prevPage,
    nextPage,
    currentPage,
  };
});
