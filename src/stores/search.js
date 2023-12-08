import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '../plugins/axios'

export const useSearchStore = defineStore('search',
() => {
    const state = reactive({
        search: [],
        searchTv: [],
        searchPerson: [],
        query: '',
        currentPage: 0,
        currentPageTv: 0,
        currentPagePerson: 0,
    })
    const search = computed(() => state.search)
    const searchTv = computed(() => state.searchTv)
    const searchPerson = computed(() => state.searchPerson)
    
    const SearchMulti = async (param, page = 1) => {
        const response = await api.get(`/search/movie?query=${param}&include_adult=false&language=pt-BR&page=${page}`);
        console.log(response.data)
        console.log(state.currentPage)
        state.currentPage = page;
        state.search = response.data.results;
    }
    const SearchTv = async (param, page = 1) => {
        const response = await api.get(`/search/tv?query=${param}&include_adult=false&language=pt-BR&page=${page}`);
        console.log(response.data)
        state.currentPageTv = page;
        state.searchTv = response.data.results;
    }
    const SearchPerson = async (param, page = 1) => {
        const response = await api.get(`/search/person?query=${param}&include_adult=false&language=pt-BR&page=${page}`);
        console.log(response.data)
        state.currentPagePerson = page;
        state.searchPerson = response.data.results;
    }
    const nextPage = () => {
        const nextPage = state.currentPage + 1;
        SearchMulti(nextPage); 
        SearchTv(nextPage);
        SearchPerson(nextPage);
    }

    const backPage = () => {
        const backPage = state.currentPage - 1;
        SearchMulti(backPage); 
        SearchTv(backPage); 
        SearchPerson(backPage); 

    }

    return {
        search,
        SearchMulti,
        nextPage,
        backPage,
        SearchTv,
        searchTv,
        currentPage: state.currentPage, 
        searchPerson,
        SearchPerson,
    }})
