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
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/72d3acaf-87a4-4d28-9a77-2424dc9da85c.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/c721686a-64c8-415d-93af-c50555d10b6a.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/4ed2b134-5d16-4be0-bc73-4cea3bfaa15a.jpg',
    'alt': 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg',
  },
  {
    'src': 'https://ottvsimg.ottvs.com.br/res/banner/67f6300c-5bae-4c48-ba3f-994f563f3729.jpg',
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