import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const usePeopleStore = defineStore('people',
() => {
    const state = reactive({
        peoples: []
    })
    const peoples = computed(() => state.peoples)

    const getAllPeople = async() => {
        const response = await api.get(`/person/popular?language=pt-BR&page=1`,{
          });
          state.peoples = response.data.results;
    }
    return {peoples, getAllPeople}
})