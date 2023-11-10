import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FilmesView from '@/views/Filmes&Series/FilmesView.vue'
import SoloMovieView from '@/views/Filmes&Series/SoloMovieView.vue'
import SeriesView from '@/views/Filmes&Series/SeriesView.vue'
import LoginView from '@/views/Authentication/LoginView.vue'
import RegisterView from '@/views/Authentication/RegisterView.vue'
import PessoasView from '@/views/Outros/PessoasView.vue'
import SoloPeopleView from '@/views/Outros/SoloPeopleView.vue'
import FavoritoView from '@/views/Favoritos/FavoritoView.vue'
import SearchView from '@/views/Outros/SearchView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: FilmesView
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/pessoas',
      name: 'pessoas',
      component: PessoasView
    },
    {
      path: '/favorito',
      name: 'favorito',
      component: FavoritoView
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: SoloMovieView,
      props: true
    },
    {
      path: '/people/:id',
      name: 'people',
      component: SoloPeopleView,
      props: true
    },
    {
      path: '/search',
      name: 'resultados',
      component: SearchView
    }
  ]
})

export default router
