import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FilmesView from '@/views/Filmes&Series/FilmesView.vue'
import SeriesView from '@/views/Filmes&Series/SeriesView.vue'
import LoginView from '@/views/Authentication/LoginView.vue'
import RegisterView from '@/views/Authentication/RegisterView.vue'
import PessoasView from '@/views/Outros/PessoasView.vue'
import FavoritoView from '@/views/Favoritos/FavoritoView.vue'


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
    }
  ]
})

export default router
