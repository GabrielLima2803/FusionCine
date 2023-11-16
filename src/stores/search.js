import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '../plugins/axios'

export const useSearchStore = defineStore('search',
() => {
    const state = reactive({
        search: [],
        query: '',
        currentPage: 0,
    })
    const search = computed(() => state.search)
    
    const SearchMulti = async (param, page = 1) => {
        const response = await api.get(`/search/multi?query=${param}&include_adult=false&language=pt-BR&page=${page}`);
        console.log(response.data)
        state.currentPage = page;
        state.search = response.data.results;
    }
    const nextPage = () => {
        const nextPage = state.currentPage + 1;
        SearchMulti(nextPage); 
    }

    const backPage = () => {
        const backPage = state.currentPage - 1;
        SearchMulti(backPage); 

    }
    return {search, SearchMulti, nextPage, backPage}
})