import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useTvStore = defineStore('tv',
() => {
    const state = reactive({
        tvs: []
    })
    const tvs = computed(() => state.tvs)

    const getAllTv = async (genreId) => {
        const response = await api.get(`discover/tv`,{
            params: {
              with_genres: genreId,
              language: 'pt-BR'
            }
          });
          state.tvs = response.data.results;
    }
    return {tvs, getAllTv}
})