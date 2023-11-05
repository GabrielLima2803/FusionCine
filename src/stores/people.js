import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const usePeopleStore = defineStore('people',
() => {
    const state = reactive({
        peoples: [],
        currentPage: 1,
    })

    const peoples = computed(() => state.peoples)
    const currentPage = computed(() => state.currentPage)

    const getAllPeople = async (page = 1) => {
        const response = await api.get(`/person/popular?language=pt-BR&page=${page}`, {
        });
        state.peoples = response.data.results;
        state.currentPage = page;
    }

    const nextPage = () => {
        const nextPage = state.currentPage + 1;
        getAllPeople(nextPage); 
    }

    const backPage = () => {
        const backPage = state.currentPage - 1;
        getAllPeople(backPage); 

    }

    return { peoples, getAllPeople, nextPage, backPage, currentPage }
})
