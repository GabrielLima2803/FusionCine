import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useTvStore = defineStore('tv', () => {
  const state = reactive({
    tvs: [],
    currentPage: 1,
    totalPages: 0
  })
  const tvs = computed(() => state.tvs)

  const getAllTv = async (genreId = null, page = 1) => {
    try {
      const params = {
        language: 'pt-BR',
        page: page,
        with_genres: genreId
      };
  
      const response = await api.get('discover/tv', { params });
      state.tvs = response.data.results;
      state.totalPages = response.data.total_pages; 
    } catch (error) {
      console.error('Erro ao buscar os filmes:', error);
    }
  };

  const getMoviesByPage = (page) => {
    state.currentPage = page;
    getAllTv(null, page);
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

  return { tvs, getAllTv, nextPage, prevPage }


})
