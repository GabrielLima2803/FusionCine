import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '../plugins/axios';

export const useSearchStore = defineStore('search', () => {
  const state = reactive({
    search: [],
    searchTv: [],
    searchPerson: [],
    query: '',
    currentPage: 0,
    currentPageTv: 0,
    currentPagePerson: 0,
  });

  const search = computed(() => state.search);
  const searchTv = computed(() => state.searchTv);
  const searchPerson = computed(() => state.searchPerson);

  const SearchMulti = async (param, page = 1) => {
    try {
      const response = await api.get(`/search/movie?query=${param}&include_adult=false&language=pt-BR&page=${page}`);
      state.currentPage = page;
      state.search = response.data.results;
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const SearchTv = async (param, page = 1) => {
    try {
      const response = await api.get(`/search/tv?query=${param}&include_adult=false&language=pt-BR&page=${page}`);
      state.currentPageTv = page;
      state.searchTv = response.data.results;
    } catch (error) {
      console.error('Error searching TV:', error);
    }
  };

  const SearchPerson = async (param, page = 1) => {
    try {
      const response = await api.get(`/search/person?query=${param}&include_adult=false&language=pt-BR&page=${page}`);
      state.currentPagePerson = page;
      state.searchPerson = response.data.results;
    } catch (error) {
      console.error('Error searching person:', error);
    }
  };

  const nextPage = async () => {
    SearchMulti( state.currentPage + 1);
    SearchTv( state.currentPageTv + 1);
    SearchPerson( state.currentPagePerson + 1);
  };

  const backPage = async () => {
    SearchMulti( state.currentPage - 1);
    SearchTv( state.currentPageTv - 1);
    SearchPerson( state.currentPagePerson - 1);
  };

  return {
    search,
    SearchMulti,
    nextPage,
    backPage,
    searchTv,
    SearchTv,
    currentPage: state.currentPage,
    searchPerson,
    SearchPerson,
    currentPageTv: state.currentPageTv,
    currentPagePerson: state.currentPagePerson,
  };
});
