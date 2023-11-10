<script setup>
import { useSearchStore } from '@/stores/search'
const searchStore = useSearchStore()
</script>

<template>
    <div class="container-max">
        <div v-for="item in searchStore.search" :key="item.id">
            {{ item.title }}
            <img :src="`https://image.tmdb.org/t/p/w500${item.profile_path}`" alt=""/>
        </div>
    </div>
</template>

<style scoped>
    .container-max{
        max-width: 1420px;
        margin: 0 auto;
    }
</style>