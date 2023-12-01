import { reactive } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    user: [],
    token: '',
  })

  
  const getToken = async () => {
    const response = await api.get(`authentication/token/new`)
    state.token = response.data.request_token
    console.log(state.token)
  }

  const register = async () => {
    const response = await api.get(`authentication/token/new`)
    state.token = response.data.request_token
    console.log(state.token)
  }

  return {  getToken }
})
