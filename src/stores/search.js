import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '../plugins/axios'

export const useSearchStore = defineStore('search',
() => {
    const state = reactive({
        search: [],
        query: ''
    })
    const search = computed(() => state.search)
    
    const SearchMulti = async (param) => {
        console.log('tetstete')
        console.log(param)
        const response = await api.get(`/search/multi?query=${param}&include_adult=false&language=pt-BR&page=1`);
        state.search = response.data.results;
    }
        
    return {search, SearchMulti}
})