import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useMovieStore = defineStore('movie',
() => {
    const state = reactive({
        movies: []
    })
    const movies = computed(() => state.movies)
    
    const getAllMovie = async (genreId) => {
        const response = await api.get(`discover/movie`,{
            params: {
              with_genres: genreId,
              language: 'pt-BR'
            }
          });
          state.movies = response.data.results;
        }
        
    return {movies, getAllMovie}
})