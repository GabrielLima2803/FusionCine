<script setup>
import { useRouter } from 'vue-router';
import PreLoader from '@/components/loading/PreLoader.vue'; // 
import { ref } from 'vue';
const router = useRouter();
const showPreloader = ref(false);

router.beforeEach(() => {
  showPreloader.value = true; // Exibir o indicador de carregamento antes da mudança de página
});

router.afterEach(() => {
  setTimeout(() => {
    showPreloader.value = false; // Ocultar o indicador de carregamento após a transição de página
  }, 500); // Defina um tempo limite para garantir que o indicador seja visível por um curto período
});
</script>
<template>
  <router-view />
  <PreLoader v-if="showPreloader" />
</template>

<style scoped>

</style>
