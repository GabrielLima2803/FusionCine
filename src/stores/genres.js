import { defineStore } from "pinia";
import api from '@/plugins/axios.js'

export const useGenreStore = defineStore('genre', {
    state: () => ({
      genres: [],
    }),
    actions: {
      async fetchGenres() {
        try {
          const response = await api.get('genre/movie/list?language=pt-BR');
          this.genres = response.data.genres;
        } catch (error) {
          console.error('Erro ao buscar gêneros:', error);
        }
      },
    },
    getters: {
      getGenreNameById: (state) => (id) => {
        const genre = state.genres.find((genre) => genre.id === id);
        return genre ? genre.name : '';
      },
    },
  });