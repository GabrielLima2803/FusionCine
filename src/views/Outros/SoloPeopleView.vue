<script setup>
import { onMounted, ref } from 'vue';
import api from '@/plugins/axios';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';

const peoples = ref([]);
const props = defineProps({
    id: Number
});

const fetchPeopleDetail = async (id) => {
    try {
        const response = await api.get(`person/${id}`, {
            params: {
                language: 'pt-BR'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os detalhes da pessoa:', error);
        return null; 
    }
};

onMounted(async () => {
    const peopleDetail = await fetchPeopleDetail(props.id);
    if (peopleDetail) {
        peoples.value = [peopleDetail];
    }
});
</script>

<template>
    <div>
        <HeaderPrincipal/>
        <div v-for="person in peoples" :key="person.id">
            {{ person.name }}
        </div>
        <FullFooter/>
    </div>
</template> 
