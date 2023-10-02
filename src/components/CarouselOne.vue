<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {ref} from 'vue'

const pictures = ref([
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/7ca84d92-252f-4cb7-87b2-401a8725dba2.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/7ca84d92-252f-4cb7-87b2-401a8725dba2.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/7ca84d92-252f-4cb7-87b2-401a8725dba2.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/7ca84d92-252f-4cb7-87b2-401a8725dba2.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/7ca84d92-252f-4cb7-87b2-401a8725dba2.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
])
</script>

<template>
  <carousel :items-to-show="1">
    <slide v-for="slide in pictures" :key="slide">
      <img :src="slide.src" :alt="slide.alt" class="img"/>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style scoped>
.img{
}
</style>