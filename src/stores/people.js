import {reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const usepeoplestore = defineStore('people',
() => {
    const state = reactive({
        peoples: []
    })
    const peoples = computed(() => state.peoples)

    const getAllPeople = async() => {
        const response = await api.get(`trending/person`,{
          });
          state.peoples = response.data.results;
    }
    return {peoples, getAllPeople}
})